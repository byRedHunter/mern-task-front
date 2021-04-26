import React, { useReducer } from 'react'
import { authContext } from './authContext'
import { authReducer } from './authReducer'

export const AuthState = ({ children }) => {
	const initialState = {
		token: sessionStorage.getItem('token'),
		autenticado: null,
		usuario: null,
		mensaje: null,
	}

	const [state, dispatch] = useReducer(authReducer, initialState)

	// funciones

	return (
		<authContext.Provider
			value={{
				token: state.token,
				autenticado: state.autenticado,
				usuario: state.usuario,
				mensaje: state.mensaje,
			}}
		>
			{children}
		</authContext.Provider>
	)
}
