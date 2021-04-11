import React, { useReducer } from 'react'
import { AGREGAR_TAREA, TAREAS_PROYECTO } from '../../types'
import { TareaContext } from './TareaContext'
import { tareaReducer } from './tareaReaducer'

export const TareaState = ({ children }) => {
	const initialState = {
		tareas: [
			{
				id: '96er4d524fssd',
				nombre: 'Elegir plataforma',
				estado: true,
				proyectoId: '964s8f5zghkl',
			},
			{
				id: '96er6sfg54fssd',
				nombre: 'Elegir colores',
				estado: false,
				proyectoId: '964s8f5zghkl',
			},
			{
				id: 'sdg96d524fssd',
				nombre: 'Elegir hosting',
				estado: true,
				proyectoId: '96460sgdghkl',
			},
		],
		tareasProyecto: null,
	}

	// crear dispatch y state
	const [state, dispatch] = useReducer(tareaReducer, initialState)

	// metodos

	// obtener tareas de un proyecto
	const obtenerTareas = (proyectoId) => {
		dispatch({
			type: TAREAS_PROYECTO,
			payload: proyectoId,
		})
	}

	// agregar una tarea al proyecto seleccionado
	const agregarTarea = (proyecto) => {
		dispatch({
			type: AGREGAR_TAREA,
			payload: proyecto,
		})
	}

	return (
		<TareaContext.Provider
			value={{
				tareas: state.tareas,
				tareasProyecto: state.tareasProyecto,
				obtenerTareas,
				agregarTarea,
			}}
		>
			{children}
		</TareaContext.Provider>
	)
}
