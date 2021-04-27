// 3 -> creamos el state para consumir context y el reducer

import React, { useReducer } from 'react'
import { clienteAxios } from '../../config/axios'
import {
	AGREGAR_PROYECTO,
	ELIMINAR_PROYECTO,
	FORMULARIO_PROYECTO,
	OBTENER_PROYECTOS,
	PROYECTO_ACTUAL,
	PROYECTO_ERROR,
	RESETEAR_PROYECTO,
	VALIDAR_FORMULARIO,
} from '../../types'
import { proyectoContext } from './proyectoContext'
import { proyectoReducer } from './proyectoReducer'

export const ProyectoState = (props) => {
	const initialState = {
		formulario: false,
		proyectos: [],
		errorFormulario: false,
		proyecto: null,
		mensaje: null,
	}

	// dispatch para ejecutar las acciones
	const [state, dispatch] = useReducer(proyectoReducer, initialState)

	// serie de funciones para el crud de proyectos
	const mostrarFormulario = () => {
		dispatch({
			type: FORMULARIO_PROYECTO,
		})
	}

	const obtenerProyectos = async () => {
		try {
			const resultado = await clienteAxios.get('/api/proyectos')

			dispatch({
				type: OBTENER_PROYECTOS,
				payload: resultado.data,
			})
		} catch (error) {
			const alerta = {
				msg: error.response.data || 'Hubo un error',
				categoria: 'alerta-error',
			}

			dispatch({
				type: PROYECTO_ERROR,
				payload: alerta,
			})
		}
	}

	const agregarProyecto = async (proyecto) => {
		try {
			const resultado = await clienteAxios.post('/api/proyectos', proyecto)

			dispatch({
				type: AGREGAR_PROYECTO,
				payload: resultado.data,
			})
		} catch (error) {
			const alerta = {
				msg: error.response.data || 'Hubo un error',
				categoria: 'alerta-error',
			}

			dispatch({
				type: PROYECTO_ERROR,
				payload: alerta,
			})
		}
	}

	// validar formulario por errores
	const mostrarError = () => {
		dispatch({
			type: VALIDAR_FORMULARIO,
		})
	}

	// selecciona el proyecto qu el usuario dio clic
	const proyectoActual = (proyecto) => {
		dispatch({
			type: PROYECTO_ACTUAL,
			payload: proyecto,
		})
	}

	// elimina un proyecto
	const eliminarProyecto = async (proyectoId) => {
		try {
			await clienteAxios.delete(`/api/proyectos/7`)

			dispatch({
				type: ELIMINAR_PROYECTO,
				payload: proyectoId,
			})
		} catch (error) {
			const alerta = {
				msg: error.response.data || 'Hubo un error',
				categoria: 'alerta-error',
			}

			dispatch({
				type: PROYECTO_ERROR,
				payload: alerta,
			})
		}
	}

	// limpiear tarea seleccionada al cerrar sesion
	const resetearProyecto = () => {
		dispatch({
			type: RESETEAR_PROYECTO,
		})
	}

	return (
		<proyectoContext.Provider
			value={{
				proyectos: state.proyectos,
				formulario: state.formulario,
				errorFormulario: state.errorFormulario,
				proyecto: state.proyecto,
				mensaje: state.mensaje,
				mostrarFormulario,
				obtenerProyectos,
				agregarProyecto,
				mostrarError,
				proyectoActual,
				eliminarProyecto,
				resetearProyecto,
			}}
		>
			{props.children}
		</proyectoContext.Provider>
	)
}
