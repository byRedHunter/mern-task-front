import React from 'react'
import { Link } from 'react-router-dom'

import { useForm } from '../../hooks/useForm'

export const Login = () => {
	const { values, handleInputChange } = useForm({
		email: '',
		password: '',
	})
	const { email, password } = values

	const onSubmit = (e) => {
		e.preventDefault()

		// validar que no haya campos vacios

		// pasarlo al action
	}

	return (
		<div className='form-usuario'>
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
