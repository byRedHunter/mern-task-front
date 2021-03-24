import React from 'react'
import { useForm } from '../../hooks/useForm'

export const NuevoProyecto = () => {
	const { values, handleInputChange, reset } = useForm({
		nombre: '',
	})

	const { nombre } = values

	const handleSubmit = (e) => {
		e.preventDefault()

		// validar el proyecto

		// agregar al state

		// reiniciar el form
		reset()
	}

	return (
		<>
			<button type='button' className='btn btn-block btn-primario'>
				Nuevo Proyecto
			</button>

			<form className='formulario-nuevo-proyecto' onSubmit={handleSubmit}>
				<input
					type='text'
					className='input-text'
					placeholder='Nombre proyecto'
					name='nombre'
					value={nombre}
					onChange={handleInputChange}
				/>

				<input
					type='submit'
					className='btn btn-primario btn-block'
					value='Agregar Proyecto'
				/>
			</form>
		</>
	)
}
