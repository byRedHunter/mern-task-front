import React, { useContext, useEffect } from 'react'
import { authContext } from '../../context/autenticacion/authContext'
import { Barra } from '../layout/Barra'
import { Sidebar } from '../layout/Sidebar'
import { FormTarea } from '../tareas/FormTarea'
import { ListadosTareas } from '../tareas/ListadosTareas'

export const Proyectos = () => {
	// state de auth
	const authState = useContext(authContext)
	const { usuarioAutenticado } = authState

	useEffect(() => {
		usuarioAutenticado()
	}, [])

	return (
		<div className='contenedor-app'>
			<Sidebar />

			<section className='seccion-principal'>
				<Barra />

				<main>
					<FormTarea />
					<div className='contenedor-tareas'>
						<ListadosTareas />
					</div>
				</main>
			</section>
		</div>
	)
}
