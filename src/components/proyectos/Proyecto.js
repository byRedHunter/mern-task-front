import React, { useContext } from 'react'
import { proyectoContext } from '../../context/proyectos/proyectoContext'

export const Proyecto = ({ proyecto }) => {
	const state = useContext(proyectoContext)
	const { proyectoActual } = state

	return (
		<li>
			<button
				type='button'
				className='btn btn-block'
				onClick={() => proyectoActual(proyecto)}
			>
				{proyecto.nombre}
			</button>
		</li>
	)
}
