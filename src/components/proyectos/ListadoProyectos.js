import React, { useContext, useEffect } from 'react'
import { alertaContext } from '../../context/alertas/alertaContext'
import { proyectoContext } from '../../context/proyectos/proyectoContext'
import { Proyecto } from './Proyecto'

export const ListadoProyectos = () => {
	const state = useContext(proyectoContext)
	const { mensaje, proyectos, obtenerProyectos } = state

	const alertaState = useContext(alertaContext)
	const { alerta, mostrarAlerta } = alertaState

	// obtener proyectos cuando carga el componente
	useEffect(() => {
		// si hay un error
		if (mensaje) mostrarAlerta(mensaje.msg, mensaje.categoria)

		obtenerProyectos()
		// eslint-disable-next-line
	}, [mensaje])

	// revisamos si proyectos tiene contenido
	if (proyectos.length === 0)
		return (
			<p className='mensaje info'>
				Aun no tienes proyectos, comienza creando uno.
			</p>
		)

	return (
		<ul className='listado-proyectos'>
			{alerta && (
				<div className={`alerta ${alerta.categoria}`}> {alerta.msg} </div>
			)}

			{proyectos.map((proyecto) => (
				<Proyecto key={proyecto._id} proyecto={proyecto} />
			))}
		</ul>
	)
}
