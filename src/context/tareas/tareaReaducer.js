import { AGREGAR_TAREA, ELIMINAR_TAREA, TAREAS_PROYECTO } from '../../types'

export const tareaReducer = (state, action) => {
	switch (action.type) {
		case TAREAS_PROYECTO:
			return {
				...state,
				tareasProyecto: state.tareas.filter(
					(tarea) => tarea.proyectoId === action.payload
				),
			}

		case AGREGAR_TAREA:
			return {
				...state,
				tareas: [...state.tareas, action.payload],
			}

		case ELIMINAR_TAREA:
			return {
				...state,
				tareas: state.tareas.filter((tarea) => tarea.id !== action.payload),
			}

		default:
			return state
	}
}
