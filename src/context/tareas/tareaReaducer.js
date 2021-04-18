import {
	AGREGAR_TAREA,
	ELIMINAR_TAREA,
	ESTADO_TAREA,
	TAREAS_PROYECTO,
	TAREA_ACTUAL,
} from '../../types'

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
				tareas: [action.payload, ...state.tareas],
			}

		case ELIMINAR_TAREA:
			return {
				...state,
				tareas: state.tareas.filter((tarea) => tarea.id !== action.payload),
			}

		case ESTADO_TAREA:
			return {
				...state,
				tareas: state.tareas.map((tarea) =>
					tarea.id === action.payload.id ? action.payload : tarea
				),
			}

		case TAREA_ACTUAL:
			return {
				...state,
				tareaSeleccionada: action.payload,
			}

		default:
			return state
	}
}
