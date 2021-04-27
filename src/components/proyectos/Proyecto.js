import React, { useContext } from 'react'
import { proyectoContext } from '../../context/proyectos/proyectoContext'
import { TareaContext } from '../../context/tareas/TareaContext'

export const Proyecto = ({ proyecto }) => {
	const stateProyecto = useContext(proyectoContext)
	const { proyectoActual } = stateProyecto
	const stateTarea = useContext(TareaContext)
	const { obtenerTareas } = stateTarea

	// funcion para agregar el proyecto acutal y obtener sus tareas
	const seleccionarProyecto = () => {
		proyectoActual(proyecto) // fijar proyecto actual
		obtenerTareas(proyecto._id) // obtener las tareas del proyecto
	}

	return (
		<li className=' animate__animated animate__zoomIn'>
			<button
				type='button'
				className='btn btn-block'
				onClick={seleccionarProyecto}
			>
				{proyecto.nombre}
			</button>
		</li>
	)
}
