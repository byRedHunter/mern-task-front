import React, { useContext } from 'react'
import { proyectoContext } from '../../context/proyectos/proyectoContext'
import { TareaContext } from '../../context/tareas/TareaContext'
import { Tarea } from './Tarea'

export const ListadosTareas = () => {
	const stateProyecto = useContext(proyectoContext)
	const { proyecto, eliminarProyecto } = stateProyecto

	const stateTareas = useContext(TareaContext)
	const { tareasProyecto } = stateTareas

	// si no hay proyecto seleccionado
	if (!proyecto)
		return <div className='mensaje info'>Selecciona un proyecto</div>

	return (
		<>
			<h2>Proyecto: {proyecto.nombre}</h2>

			<ul className='listado-tareas'>
				{tareasProyecto.length === 0 ? (
					<li className='tarea'>No hay tareas</li>
				) : (
					tareasProyecto.map((tarea) => <Tarea key={tarea._id} tarea={tarea} />)
				)}
			</ul>

			<button
				type='button'
				className='btn btn-eliminar'
				onClick={() => eliminarProyecto(proyecto._id)}
			>
				Eliminar Proyecto &times;
			</button>
		</>
	)
}
