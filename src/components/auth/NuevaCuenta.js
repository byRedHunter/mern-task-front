import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { alertaContext } from '../../context/alertas/alertaContext'

import { useForm } from '../../hooks/useForm'

export const NuevaCuenta = () => {
	// context alerta
	const alertaState = useContext(alertaContext)
	const { alerta, mostrarAlerta } = alertaState

	const { values, handleInputChange } = useForm({
		nombre: '',
		email: '',
		password: '',
		confirmar: '',
	})
	const { nombre, email, password, confirmar } = values

	const onSubmit = (e) => {
		e.preventDefault()

		// validar que no haya campos vacios
		if (
			nombre.trim() === '' ||
			email.trim() === '' ||
			password.trim() === '' ||
			confirmar.trim() === ''
		) {
			mostrarAlerta('Todos los campos son obligatorios', 'alerta-error')
		}

		// password minimo de 6 caracteres

		// los 2 passwords iguales

		// pasarlo al action
	}

	return (
		<div className='form-usuario'>
			{alerta && (
				<div className={`alerta ${alerta.categoria}`}>{alerta.msg}</div>
			)}
			<div className='contenedor-form sombra-dark'>
				<h1>Crea una cuenta</h1>

				<form onSubmit={onSubmit}>
					<div className='campo-form'>
						<label htmlFor='nombre'>Nombre</label>
						<input
							type='text'
							id='nombre'
							name='nombre'
							placeholder='Tu nombre'
							value={nombre}
							onChange={handleInputChange}
						/>
					</div>

					<div className='campo-form'>
						<label htmlFor='email'>Email</label>
						<input
							type='email'
							id='email'
							name='email'
							placeholder='Tu email'
							value={email}
							onChange={handleInputChange}
						/>
					</div>

					<div className='campo-form'>
						<label htmlFor='password'>Password</label>
						<input
							type='password'
							id='password'
							name='password'
							placeholder='Tu password'
							value={password}
							onChange={handleInputChange}
							autoComplete='off'
						/>
					</div>

					<div className='campo-form'>
						<label htmlFor='confirmar'>Confirmar</label>
						<input
							type='password'
							id='confirmar'
							name='confirmar'
							placeholder='Confirmar password'
							value={confirmar}
							onChange={handleInputChange}
							autoComplete='off'
						/>
					</div>

					<div className='campo-form'>
						<input
							type='submit'
							className='btn btn-primario btn-block '
							value='Registrarme'
						/>
					</div>
				</form>

				<Link to={'/'} className='enlace-cuenta'>
					Iniciar Sesión
				</Link>
			</div>
		</div>
	)
}
