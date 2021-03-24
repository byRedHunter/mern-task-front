import React from 'react'
import { Barra } from '../layout/Barra'
import { Sidebar } from '../layout/Sidebar'

export const Proyectos = () => {
	return (
		<div className='contenedor-app'>
			<Sidebar />

			<section className='seccion-principal'>
				<Barra />

				<main>
					<div className='contenedor-tareas'></div>
				</main>
			</section>
		</div>
	)
}
