import React, { useReducer } from 'react'
import { clienteAxios } from '../../config/axios'
import { REGISTRO_ERROR, REGISTRO_EXITOSO } from '../../types'
import { authContext } from './authContext'
import { authReducer } from './authReducer'

export const AuthState = ({ children }) => {
	const initialState = {
		token: sessionStorage.getItem('token'),
		autenticado: null,
		usuario: null,
		mensaje: null,
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

	return (
		<authContext.Provider
			value={{
				token: state.token,
				autenticado: state.autenticado,
				usuario: state.usuario,
				mensaje: state.mensaje,
				registrarUsuario,
			}}
		>
			{children}
		</authContext.Provider>
	)
}
