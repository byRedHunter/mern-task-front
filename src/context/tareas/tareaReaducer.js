import { AGREGAR_TAREA, TAREAS_PROYECTO } from '../../types'

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

		default:
			return state
	}
}
