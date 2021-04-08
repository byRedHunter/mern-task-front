// 3 -> creamos el state para consumir context y el reducer

import React, { useReducer } from 'react'
import { proyectoContext } from './proyectoContext'
import { proyectoReducer } from './proyectoReducer'

export const ProyectoState = (props) => {
	const initialState = {
		formulario: false,
	}

	// dispatch para ejecutar las acciones
	const [state, dispatch] = useReducer(proyectoReducer, initialState)

	// serie de funciones para el crud de proyectos

	return (
		<proyectoContext.Provider value={{ formulario: state.formulario }}>
			{props.children}
		</proyectoContext.Provider>
	)
}
