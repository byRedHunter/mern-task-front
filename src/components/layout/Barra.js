import React, { useContext } from 'react'
import { authContext } from '../../context/autenticacion/authContext'
import { proyectoContext } from '../../context/proyectos/proyectoContext'
import { TareaContext } from '../../context/tareas/TareaContext'

export const Barra = () => {
	const authState = useContext(authContext)
	const { usuario, cerrarSesion } = authState

	const proyectoState = useContext(proyectoContext)
	const { resetearProyecto } = proyectoState

	const tareaState = useContext(TareaContext)
	const { resetearTareas } = tareaState

	const handleCerrarSession = () => {
		cerrarSesion()
		resetearProyecto()
		resetearTareas()
	}

	return (
		<header className='app-header'>
			{usuario ? (
				<p className='nombre-usuario'>
					Hola <span>{usuario.nombre}</span>
				</p>
			) : (
				<p className='nombre-usuario'>You can do it.</p>
			)}

			<nav className='nav-principal'>
				<button
					className='btn btn-blank cerrar-sesion'
					onClick={handleCerrarSession}
				>
					Cerrar Sesión
				</button>
			</nav>
		</header>
	)
}
