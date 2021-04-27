import React, { useContext } from 'react'
import { authContext } from '../../context/autenticacion/authContext'

export const Barra = () => {
	const authState = useContext(authContext)
	const { usuario, cerrarSesion } = authState

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
					onClick={() => cerrarSesion()}
				>
					Cerrar Sesión
				</button>
			</nav>
		</header>
	)
}
