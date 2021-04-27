import React, { useReducer } from 'react'
import { clienteAxios } from '../../config/axios'
import {
	ACTUALIZAR_TAREA,
	AGREGAR_TAREA,
	ELIMINAR_TAREA,
	ESTADO_TAREA,
	LIMPIAR_TAREA,
	TAREAS_PROYECTO,
	TAREA_ACTUAL,
} from '../../types'
import { TareaContext } from './TareaContext'
import { tareaReducer } from './tareaReaducer'

export const TareaState = ({ children }) => {
	const initialState = {
		tareasProyecto: [],
		tareaSeleccionada: null,
	}

	// crear dispatch y state
	const [state, dispatch] = useReducer(tareaReducer, initialState)

	// metodos

	// obtener tareas de un proyecto
	const obtenerTareas = async (proyecto) => {
		try {
			const resultado = await clienteAxios.get(`/api/tareas/`, {
				params: { proyecto },
			})

			dispatch({
				type: TAREAS_PROYECTO,
				payload: resultado.data,
			})
		} catch (error) {
			console.log(error.response)
		}
	}

	// agregar una tarea al proyecto seleccionado
	const agregarTarea = async (tarea) => {
		console.log(tarea)
		try {
			const resultado = await clienteAxios.post('/api/tareas', tarea)
			dispatch({
				type: AGREGAR_TAREA,
				payload: resultado.data,
			})
		} catch (error) {
			console.log(error.response)
		}
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

	// edita o modifica una tarea
	const actualizarTarea = (tarea) => {
		dispatch({
			type: ACTUALIZAR_TAREA,
			payload: tarea,
		})
	}

	// limpiar tarea seleccionada a editar
	const limpiarTarea = () => {
		dispatch({
			type: LIMPIAR_TAREA,
		})
	}

	return (
		<TareaContext.Provider
			value={{
				tareasProyecto: state.tareasProyecto,
				tareaSeleccionada: state.tareaSeleccionada,
				obtenerTareas,
				agregarTarea,
				eliminarTarea,
				cambiarEstadoTarea,
				guardarTareaActual,
				actualizarTarea,
				limpiarTarea,
			}}
		>
			{children}
		</TareaContext.Provider>
	)
}
