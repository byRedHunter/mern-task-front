import React from 'react'
import { Sidebar } from '../layout/Sidebar'

export const Proyectos = () => {
	return (
		<div className='contenedor-app'>
			<Sidebar />

			<section className='seccion-principal'>
				<main>
					<div className='contenedor-tareas'></div>
				</main>
			</section>
		</div>
	)
}
