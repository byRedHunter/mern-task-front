import {
	CERRAR_SESION,
	LOGIN_ERROR,
	LOGIN_EXITOSO,
	OBTENER_USUARIO,
	REGISTRO_ERROR,
	REGISTRO_EXITOSO,
} from '../../types'

export const authReducer = (state, action) => {
	switch (action.type) {
		case LOGIN_EXITOSO:
		case REGISTRO_EXITOSO:
			sessionStorage.setItem('token', action.payload.token)
			return {
				...state,
				token: action.payload.token,
				autenticado: true,
				mensaje: null,
			}

		case CERRAR_SESION:
		case LOGIN_ERROR:
		case REGISTRO_ERROR:
			sessionStorage.removeItem('token')
			return {
				...state,
				usuario: null,
				autenticado: null,
				token: null,
				mensaje: action.payload,
			}

		case OBTENER_USUARIO:
			return {
				...state,
				autenticado: true,
				usuario: action.payload,
			}

		default:
			return state
	}
}
