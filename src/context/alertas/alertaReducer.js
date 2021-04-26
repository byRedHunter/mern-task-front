import { MOSTRAR_ALERTA, OCULTAR_ALERTA } from '../../types'

export const alertaReducer = (state, action) => {
	switch (action.type) {
		case MOSTRAR_ALERTA:
			console.log(action.payload)
			console.log('mostrar')
			return {
				alerta: action.payload,
			}

		case OCULTAR_ALERTA:
			console.log('ocultar')
			return {
				alerta: null,
			}

		default:
			return state
	}
}
