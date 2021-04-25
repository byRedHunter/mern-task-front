import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Login } from './components/auth/Login'
import { NuevaCuenta } from './components/auth/NuevaCuenta'
import { Proyectos } from './components/proyectos/Proyectos'
import { AlertaState } from './context/alertas/AlertaState'
import { ProyectoState } from './context/proyectos/ProyectoState'
import { TareaState } from './context/tareas/TareaState'

function App() {
	return (
		<ProyectoState>
			<TareaState>
				<AlertaState>
					<Router>
						<Switch>
							<Route exact path='/' component={Login} />
							<Route exact path='/nueva-cuenta' component={NuevaCuenta} />
							<Route exact path='/proyectos' component={Proyectos} />
						</Switch>
					</Router>
				</AlertaState>
			</TareaState>
		</ProyectoState>
	)
}

export default App
