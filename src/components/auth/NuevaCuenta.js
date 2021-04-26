import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { alertaContext } from '../../context/alertas/alertaContext'
import { authContext } from '../../context/autenticacion/authContext'

import { useForm } from '../../hooks/useForm'

export const NuevaCuenta = ({ history }) => {
	// context alerta
	const alertaState = useContext(alertaContext)
	const { alerta, mostrarAlerta } = alertaState

	// context auth
	const authState = useContext(authContext)
	const { mensaje, autenticado, registrarUsuario } = authState

	// en caso de que el usuario se haya autenticado o registrado o sea un registro duplicado
	useEffect(() => {
		if (autenticado) history.push('/proyectos')

		if (mensaje) mostrarAlerta(mensaje.msg, 'alerta-error')
		// eslint-disable-next-line
	}, [mensaje, autenticado, history])

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
			return
		}

		// password minimo de 6 caracteres
		if (password.length < 6) {
			mostrarAlerta(
				'El password debe ser de almenos 6 caracteres.',
				'alerta-error'
			)
			return
		}

		// los 2 passwords iguales
		if (password !== confirmar) {
			mostrarAlerta('Los passwords no son iguales.', 'alerta-error')
			return
		}

		// pasarlo al action
		registrarUsuario({ nombre, email, password })
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
