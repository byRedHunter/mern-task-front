import React, { useReducer } from 'react'
import {
	AGREGAR_TAREA,
	ELIMINAR_TAREA,
	ESTADO_TAREA,
	TAREAS_PROYECTO,
	TAREA_ACTUAL,
} from '../../types'
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
		tareaSeleccionada: null,
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
	const agregarTarea = (tarea) => {
		dispatch({
			type: AGREGAR_TAREA,
			payload: tarea,
		})
	}

	// eliminar na tarea
	const eliminarTarea = (tareaId) => {
		dispatch({
			type: ELIMINAR_TAREA,
			payload: tareaId,
		})
	}

	// cambiar el estado de una tarea
	const cambiarEstadoTarea = (tarea) => {
		dispatch({
			type: ESTADO_TAREA,
			payload: tarea,
		})
	}

	// seleccionar tarea actual a editar
	const guardarTareaActual = (tarea) => {
		dispatch({
			type: TAREA_ACTUAL,
			payload: tarea,
		})
	}

	return (
		<TareaContext.Provider
			value={{
				tareas: state.tareas,
				tareasProyecto: state.tareasProyecto,
				tareaSeleccionada: state.tareaSeleccionada,
				obtenerTareas,
				agregarTarea,
				eliminarTarea,
				cambiarEstadoTarea,
				guardarTareaActual,
			}}
		>
			{children}
		</TareaContext.Provider>
	)
}
