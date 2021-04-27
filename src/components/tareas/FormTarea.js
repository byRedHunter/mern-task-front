import React, { useContext, useEffect, useState } from 'react'
import { proyectoContext } from '../../context/proyectos/proyectoContext'
import { TareaContext } from '../../context/tareas/TareaContext'
import { useForm } from '../../hooks/useForm'

export const FormTarea = () => {
	const [errorForm, setErrorForm] = useState(false)

	const stateProyecto = useContext(proyectoContext)
	const { proyecto } = stateProyecto
	const stateTarea = useContext(TareaContext)
	const {
		agregarTarea,
		obtenerTareas,
		tareaSeleccionada,
		actualizarTarea,
		limpiarTarea,
	} = stateTarea

	const { values, handleInputChange, reset } = useForm({ nombre: '' })
	const { nombre } = values

	// effect que detecta si hay una tarea seleccionada
	useEffect(() => {
		if (tareaSeleccionada !== null) {
			reset(tareaSeleccionada)
		} else {
			reset()
		}
		// eslint-disable-next-line
	}, [tareaSeleccionada])

	if (!proyecto) return null

	const handleSubmit = (e) => {
		e.preventDefault()

		// validar
		if (nombre.trim() === '') {
			setErrorForm(true)
			return
		}

		// revisa si es edicion o nueva tarea
		if (tareaSeleccionada) {
			// editar tarea
			actualizarTarea(values)
			// eliminamos tarea seleccionada
			limpiarTarea()
		} else {
			// nueva tarea

			setErrorForm(false)
			values.proyecto = proyecto._id
			agregarTarea(values)
		}

		// obtener tareas
		obtenerTareas(proyecto._id)

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
						value={tareaSeleccionada ? 'Editar Tarea' : 'Guardar Tarea'}
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
