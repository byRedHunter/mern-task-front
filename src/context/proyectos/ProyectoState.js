// 3 -> creamos el state para consumir context y el reducer

import React, { useReducer } from 'react'
import { FORMULARIO_PROYECTO } from '../../types'
import { proyectoContext } from './proyectoContext'
import { proyectoReducer } from './proyectoReducer'

export const ProyectoState = (props) => {
	const initialState = {
		formulario: false,
		proyectos: [
			{
				id: '964s8f5zghkl',
				nombre: 'Tieda Virtual',
			},
			{
				id: '96460sgdghkl',
				nombre: 'Diseño sitio web',
			},
			{
				id: '9sdg6s4d8fdf',
				nombre: 'MERN',
			},
		],
	}

	// dispatch para ejecutar las acciones
	const [state, dispatch] = useReducer(proyectoReducer, initialState)

	// serie de funciones para el crud de proyectos
	const mostrarFormulario = () => {
		dispatch({
			type: FORMULARIO_PROYECTO,
		})
	}

	return (
		<proyectoContext.Provider
			value={{
				proyectos: state.proyectos,
				formulario: state.formulario,
				mostrarFormulario,
			}}
		>
			{props.children}
		</proyectoContext.Provider>
	)
}
