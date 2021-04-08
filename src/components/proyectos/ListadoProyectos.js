import React, { useContext } from 'react'
import { proyectoContext } from '../../context/proyectos/proyectoContext'
import { Proyecto } from './Proyecto'

export const ListadoProyectos = () => {
	const state = useContext(proyectoContext)
	const { proyectos } = state

	// revisamos si proyectos tiene contenido
	if (proyectos.length === 0) return null

	return (
		<ul className='listado-proyectos'>
			{proyectos.map((proyecto) => (
				<Proyecto key={proyecto.id} proyecto={proyecto} />
			))}
		</ul>
	)
}
