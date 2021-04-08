import React from 'react'
import { Tarea } from './Tarea'

export const ListadosTareas = () => {
	const tareasProyecto = [
		{
			id: '96er4d524fssd',
			nombre: 'Elegir plataforma',
			estado: true,
		},
		{
			id: '96er6sfg54fssd',
			nombre: 'Elegir colores',
			estado: false,
		},
		{
			id: 'sdg96d524fssd',
			nombre: 'Elegir hosting',
			estado: true,
		},
	]

	return (
		<>
			<h2>Tienda virtual</h2>

			<ul className='listado-tareas'>
				{tareasProyecto.length === 0 ? (
					<li className='tarea'>No hay tareas</li>
				) : (
					tareasProyecto.map((tarea) => <Tarea key={tarea.id} tarea={tarea} />)
				)}
			</ul>

			<button type='button' className='btn btn-eliminar'>
				Eliminar Proyectos &times;
			</button>
		</>
	)
}
