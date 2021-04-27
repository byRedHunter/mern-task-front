import React, { useContext } from 'react'
import { proyectoContext } from '../../context/proyectos/proyectoContext'
import { TareaContext } from '../../context/tareas/TareaContext'

export const Tarea = ({ tarea }) => {
	const tareaState = useContext(TareaContext)
	const {
		eliminarTarea,
		obtenerTareas,
		guardarTareaActual,
		actualizarTarea,
	} = tareaState
	const proyectoState = useContext(proyectoContext)
	const { proyecto } = proyectoState

	const handleEliminar = () => {
		eliminarTarea(tarea._id, proyecto)
		obtenerTareas(proyecto._id)
	}

	const cambiarEstado = (tarea) => {
		if (tarea.estado) {
			tarea.estado = false
		} else {
			tarea.estado = true
		}
		actualizarTarea(tarea)
	}

	return (
		<li className='tarea sombra animate__animated animate__backInRight'>
			<p> {tarea.nombre} </p>

			<div className='estado'>
				{tarea.estado ? (
					<button
						type='button'
						className='completo'
						onClick={() => cambiarEstado(tarea)}
					>
						Completo
					</button>
				) : (
					<button
						type='button'
						className='incompleto'
						onClick={() => cambiarEstado(tarea)}
					>
						Incompleto
					</button>
				)}
			</div>

			<div className='acciones'>
				<button
					type='button'
					className='btn btn-primario'
					onClick={() => guardarTareaActual(tarea)}
				>
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
