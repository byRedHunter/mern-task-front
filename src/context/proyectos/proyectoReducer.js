// 2 -> se crea el reducer para ser consumido en el state, luego se agregaran mas opciones al switch

import { FORMULARIO_PROYECTO } from '../../types'

export const proyectoReducer = (state, action) => {
	switch (action.type) {
		case FORMULARIO_PROYECTO:
			return {
				...state,
				formulario: true,
			}

		default:
			return state
	}
}
