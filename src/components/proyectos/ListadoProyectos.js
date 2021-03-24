import React from 'react'
import { Proyecto } from './Proyecto'

export const ListadoProyectos = () => {
	const proyectos = [
		{
			nombre: 'Tieda Virtual',
		},
		{
			nombre: 'Diseño sitio web',
		},
	]
	return (
		<ul className='listado-proyectos'>
			{proyectos.map((proyecto) => (
				<Proyecto key={proyecto.nombre} proyecto={proyecto} />
			))}
		</ul>
	)
}
