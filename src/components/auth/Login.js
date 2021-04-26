import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { alertaContext } from '../../context/alertas/alertaContext'
import { authContext } from '../../context/autenticacion/authContext'

import { useForm } from '../../hooks/useForm'

export const Login = ({ history }) => {
	// context alerta
	const alertaState = useContext(alertaContext)
	const { alerta, mostrarAlerta } = alertaState

	// context auth
	const authState = useContext(authContext)
	const { mensaje, autenticado, iniciarSession } = authState

	// en caso de que el password o usuario no exista
	useEffect(() => {
		if (autenticado) history.push('/proyectos')

		if (mensaje) mostrarAlerta(mensaje.msg, mensaje.categoria)
		// eslint-disable-next-line
	}, [mensaje, autenticado, history])

	const { values, handleInputChange } = useForm({
		email: '',
		password: '',
	})
	const { email, password } = values

	const onSubmit = (e) => {
		e.preventDefault()

		// validar que no haya campos vacios
		if (email.trim() === '' || password.trim() === '')
			mostrarAlerta('Todos los campos son obligatorios.', 'alerta-error')

		// pasarlo al action
		iniciarSession({ email, password })
	}

	return (
		<div className='form-usuario'>
			{alerta && (
				<div className={`alerta ${alerta.categoria}`}> {alerta.msg} </div>
			)}

			<div className='contenedor-form sombra-dark'>
				<h1>Iniciar Sesión</h1>

				<form onSubmit={onSubmit}>
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
						<input
							type='submit'
							className='btn btn-primario btn-block '
							value='Iniciar Sesión'
						/>
					</div>
				</form>

				<Link to={'/nueva-cuenta'} className='enlace-cuenta'>
					Obtener Cuenta
				</Link>
			</div>
		</div>
	)
}
