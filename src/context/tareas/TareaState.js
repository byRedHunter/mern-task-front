import React, { useReducer } from 'react'
import { TareaContext } from './TareaContext'
import { tareaReducer } from './tareaReaducer'

export const TareaState = ({ children }) => {
	const initialState = {
		tareas: [],
	}

	// crear dispatch y state
	const [state, dispatch] = useReducer(tareaReducer, initialState)

	return (
		<TareaContext.Provider value={{ tareas: state.tareas }}>
			{children}
		</TareaContext.Provider>
	)
}
