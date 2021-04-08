import React, { useContext } from 'react'
import { useForm } from '../../hooks/useForm'
import { proyectoContext } from '../../context/proyectos/proyectoContext'

export const NuevoProyecto = () => {
	// consumir el context -- obtener el state del formulario
	const state = useContext(proyectoContext)
	const { formulario, mostrarFormulario } = state

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
			<button
				type='button'
				className='btn btn-block btn-primario'
				onClick={() => mostrarFormulario()}
			>
				Nuevo Proyecto
			</button>

			{formulario && (
				<form
					className='formulario-nuevo-proyecto'
					onSubmit={handleSubmit}
					autoComplete='off'
				>
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
			)}
		</>
	)
}
