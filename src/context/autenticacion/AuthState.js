import React, { useReducer } from 'react'
import { clienteAxios } from '../../config/axios'
import { tokenAuth } from '../../config/tokenAuth'
import {
	CERRAR_SESION,
	LOGIN_ERROR,
	LOGIN_EXITOSO,
	OBTENER_USUARIO,
	REGISTRO_ERROR,
	REGISTRO_EXITOSO,
} from '../../types'
import { authContext } from './authContext'
import { authReducer } from './authReducer'

export const AuthState = ({ children }) => {
	const initialState = {
		token: sessionStorage.getItem('token'),
		autenticado: null,
		usuario: null,
		mensaje: null,
		cargando: true,
	}

	const [state, dispatch] = useReducer(authReducer, initialState)

	// funciones

	// registrar usuario
	const registrarUsuario = async (datos) => {
		try {
			const respuesta = await clienteAxios.post('/api/usuarios', datos)

			dispatch({
				type: REGISTRO_EXITOSO,
				payload: respuesta.data,
			})

			// obtener usuario
			usuarioAutenticado()
		} catch (error) {
			const alerta = {
				msg: error.response.data.msg,
				categoria: 'alerta-error',
			}

			dispatch({
				type: REGISTRO_ERROR,
				payload: alerta,
			})
		}
	}

	// retorna el usuario autenticado
	const usuarioAutenticado = async () => {
		const token = sessionStorage.getItem('token')
		if (token) {
			// funcion para enviar el token por headers
			tokenAuth(token)
		}

		try {
			const respuesta = await clienteAxios.get('/api/auth')
			dispatch({
				type: OBTENER_USUARIO,
				payload: respuesta.data,
			})
		} catch (error) {
			dispatch({
				type: LOGIN_ERROR,
			})
		}
	}

	// cuando inicia sesion
	const iniciarSession = async (datos) => {
		try {
			const respuesta = await clienteAxios.post('/api/auth', datos)
			dispatch({
				type: LOGIN_EXITOSO,
				payload: respuesta.data,
			})

			// ontener usuario
			usuarioAutenticado()
		} catch (error) {
			console.log(error.response)
			const alerta = {
				msg: error.response.data.msg || error.response.data.errores[0].msg,
				categoria: 'alerta-error',
			}

			dispatch({
				type: LOGIN_ERROR,
				payload: alerta,
			})
		}
	}

	// cierra sesion del usurio
	const cerrarSesion = () => {
		dispatch({
			type: CERRAR_SESION,
		})
	}

	return (
		<authContext.Provider
			value={{
				token: state.token,
				autenticado: state.autenticado,
				usuario: state.usuario,
				mensaje: state.mensaje,
				cargando: state.cargando,
				registrarUsuario,
				iniciarSession,
				usuarioAutenticado,
				cerrarSesion,
			}}
		>
			{children}
		</authContext.Provider>
	)
}
