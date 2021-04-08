import React from 'react'
import { Proyecto } from './Proyecto'

export const ListadoProyectos = () => {
	const proyectos = [
		{
			id: '964s8f5zghkl',
			nombre: 'Tieda Virtual',
		},
		{
			id: '96460sgdghkl',
			nombre: 'Diseño sitio web',
		},
	]
	return (
		<ul className='listado-proyectos'>
			{proyectos.map((proyecto) => (
				<Proyecto key={proyecto.id} proyecto={proyecto} />
			))}
		</ul>
	)
}
