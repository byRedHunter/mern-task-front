// 3 -> creamos el state para consumir context y el reducer

import React, { useReducer } from 'react'
import { v4 as uuidv4 } from 'uuid'
import {
	AGREGAR_PROYECTO,
	FORMULARIO_PROYECTO,
	OBTENER_PROYECTOS,
	PROYECTO_ACTUAL,
	VALIDAR_FORMULARIO,
} from '../../types'
import { proyectoContext } from './proyectoContext'
import { proyectoReducer } from './proyectoReducer'

export const ProyectoState = (props) => {
	const proyectos = [
		{
			id: '964s8f5zghkl',
			nombre: 'Tieda Virtual',
		},
		{
			id: '96460sgdghkl',
			nombre: 'Diseño sitio web',
		},
		{
			id: '9sdg6s4d8fdf',
			nombre: 'MERN',
		},
	]

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

	const obtenerProyectos = () => {
		dispatch({
			type: OBTENER_PROYECTOS,
			payload: proyectos,
		})
	}

	const agregarProyecto = (proyecto) => {
		proyecto.id = uuidv4()

		dispatch({
			type: AGREGAR_PROYECTO,
			payload: proyecto,
		})
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
			}}
		>
			{props.children}
		</proyectoContext.Provider>
	)
}
