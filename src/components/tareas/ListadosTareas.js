import React from 'react'
import { Tarea } from './Tarea'

export const ListadosTareas = () => {
	const tareasProyecto = [
		{
			nombre: 'Elegir plataforma',
			estado: true,
		},
		{
			nombre: 'Elegir colores',
			estado: false,
		},
		{
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
					tareasProyecto.map((tarea) => <Tarea tarea={tarea} />)
				)}
			</ul>

			<button type='button' className='btn btn-eliminar'>
				Eliminar Proyectos &times;
			</button>
		</>
	)
}
