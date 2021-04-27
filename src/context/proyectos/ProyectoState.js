// 3 -> creamos el state para consumir context y el reducer

import React, { useReducer } from 'react'
import { clienteAxios } from '../../config/axios'
import {
	AGREGAR_PROYECTO,
	ELIMINAR_PROYECTO,
	FORMULARIO_PROYECTO,
	OBTENER_PROYECTOS,
	PROYECTO_ACTUAL,
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
			console.log(error)
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
			console.log(error)
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
	const eliminarProyecto = (proyectoId) => {
		dispatch({
			type: ELIMINAR_PROYECTO,
			payload: proyectoId,
		})
	}

	return (
		<proyectoContext.Provider
			value={{
				proyectos: state.proyectos,
				formulario: state.formulario,
				errorFormulario: state.errorFormulario,
				proyecto: state.proyecto,
				mostrarFormulario,
				obtenerProyectos,
				agregarProyecto,
				mostrarError,
				proyectoActual,
				eliminarProyecto,
			}}
		>
			{props.children}
		</proyectoContext.Provider>
	)
}
