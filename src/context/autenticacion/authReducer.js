import { REGISTRO_ERROR, REGISTRO_EXITOSO } from '../../types'

export const authReducer = (state, action) => {
	switch (action.type) {
		case REGISTRO_EXITOSO:
			sessionStorage.setItem('token', action.payload.token)
			return {
				...state,
				autenticado: true,
				mensaje: null,
			}

		case REGISTRO_ERROR:
			return {
				...state,
				token: null,
				mensaje: action.payload,
			}

		default:
			return state
	}
}
