import React, { useContext, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { proyectoContext } from '../../context/proyectos/proyectoContext'
import { TareaContext } from '../../context/tareas/TareaContext'
import { useForm } from '../../hooks/useForm'

export const FormTarea = () => {
	const [errorForm, setErrorForm] = useState(false)

	const stateProyecto = useContext(proyectoContext)
	const { proyecto } = stateProyecto
	const stateTarea = useContext(TareaContext)
	const { agregarTarea, obtenerTareas } = stateTarea

	const { values, handleInputChange, reset } = useForm({ nombre: '' })
	const { nombre } = values

	if (!proyecto) return null

	const handleSubmit = (e) => {
		e.preventDefault()

		// validar
		if (nombre.trim() === '') {
			setErrorForm(true)
			return
		}

		setErrorForm(false)
		values.proyectoId = proyecto.id
		values.estado = false
		values.id = uuidv4()
		agregarTarea(values)
		obtenerTareas(proyecto.id)

		// reset
		reset()
	}

	return (
		<div className='formulario'>
			<form onSubmit={handleSubmit}>
				<div className='contenedor-input'>
					<input
						type='text'
						className='input-text'
						placeholder='Nombre Tarea...'
						name='nombre'
						onChange={handleInputChange}
						value={nombre}
					/>
				</div>

				<div className='contenedor-input'>
					<input
						type='submit'
						value='Guardar Tarea'
						className='btn btn-submit btn-block'
					/>
				</div>

				{errorForm && (
					<div className='mensaje error animate__animated animate__bounceIn'>
						Complete el campo para agregar su tarea.
					</div>
				)}
			</form>
		</div>
	)
}
