import { MOSTRAR_ALERTA, OCULTAR_ALERTA } from '../../types'

export const alertaReducer = (state, action) => {
	switch (action.type) {
		case MOSTRAR_ALERTA:
			return {
				alertta: action.payload,
			}

		case OCULTAR_ALERTA:
			return {
				alertta: null,
			}

		default:
			return state
	}
}
