import React from 'react'

export const FormTarea = () => {
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
