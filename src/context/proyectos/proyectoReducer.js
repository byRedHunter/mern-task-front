// 2 -> se crea el reducer para ser consumido en el state, luego se agregaran mas opciones al switch

import {
	AGREGAR_PROYECTO,
	ELIMINAR_PROYECTO,
	FORMULARIO_PROYECTO,
	OBTENER_PROYECTOS,
	PROYECTO_ACTUAL,
	VALIDAR_FORMULARIO,
} from '../../types'

export const proyectoReducer = (state, action) => {
	switch (action.type) {
		case FORMULARIO_PROYECTO:
			return {
				...state,
				formulario: true,
			}

		case OBTENER_PROYECTOS:
			return {
				...state,
				proyectos: action.payload,
			}

		case AGREGAR_PROYECTO:
			return {
				...state,
				proyectos: [...state.proyectos, action.payload],
				errorFormulario: false,
			}

		case VALIDAR_FORMULARIO:
			return {
				...state,
				errorFormulario: true,
			}

		case PROYECTO_ACTUAL:
			return {
				...state,
				proyecto: action.payload,
				/* proyecto: state.proyectos.filter(
					(proyecto) => (proyecto.id = action.payload.id)
				), */
			}

		case ELIMINAR_PROYECTO:
			return {
				...state,
				proyectos: state.proyectos.filter(
					(proyecto) => proyecto.id !== action.payload
				),
				proyecto: null,
			}

		default:
			return state
	}
}
