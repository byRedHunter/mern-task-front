import React, { useContext } from 'react'
import { proyectoContext } from '../../context/proyectos/proyectoContext'
import { TareaContext } from '../../context/tareas/TareaContext'

export const Tarea = ({ tarea }) => {
	const tareaState = useContext(TareaContext)
	const { eliminarTarea, obtenerTareas } = tareaState
	const proyectoState = useContext(proyectoContext)
	const { proyecto } = proyectoState

	const handleEliminar = () => {
		eliminarTarea(tarea.id)
		obtenerTareas(proyecto.id)
	}

	return (
		<li className='tarea sombra'>
			<p> {tarea.nombre} </p>

			<div className='estado'>
				{tarea.estado ? (
					<button type='button' className='completo'>
						Completo
					</button>
				) : (
					<button type='button' className='incompleto'>
						Incompleto
					</button>
				)}
			</div>

			<div className='acciones'>
				<button type='button' className='btn btn-primario'>
					Editar
				</button>
				<button
					type='button'
					className='btn btn-secundario'
					onClick={handleEliminar}
				>
					Eliminar
				</button>
			</div>
		</li>
	)
}
