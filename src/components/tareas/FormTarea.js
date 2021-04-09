import React, { useContext } from 'react'
import { proyectoContext } from '../../context/proyectos/proyectoContext'

export const FormTarea = () => {
	const state = useContext(proyectoContext)
	const { proyecto } = state

	if (!proyecto) return null

	return (
		<div className='formulario'>
			<form>
				<div className='contenedor-input'>
					<input
						type='text'
						className='input-text'
						placeholder='Nombre Tarea...'
						name='nombre'
					/>
				</div>

				<div className='contenedor-input'>
					<input
						type='submit'
						value='Guardar Tarea'
						className='btn btn-submit btn-block'
					/>
				</div>
			</form>
		</div>
	)
}
