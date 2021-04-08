import React, { useContext, useEffect } from 'react'
import { proyectoContext } from '../../context/proyectos/proyectoContext'
import { Proyecto } from './Proyecto'

export const ListadoProyectos = () => {
	const state = useContext(proyectoContext)
	const { proyectos, obtenerProyectos } = state

	// obtener proyectos cuando carga el componente
	useEffect(() => {
		obtenerProyectos()
	}, [])

	// revisamos si proyectos tiene contenido
	if (proyectos.length === 0)
		return <p className='mensaje info'>Aun no tienes proyectos.</p>

	return (
		<ul className='listado-proyectos'>
			{proyectos.map((proyecto) => (
				<Proyecto key={proyecto.id} proyecto={proyecto} />
			))}
		</ul>
	)
}
