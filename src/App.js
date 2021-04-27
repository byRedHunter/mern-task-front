import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Login } from './components/auth/Login'
import { NuevaCuenta } from './components/auth/NuevaCuenta'
import { Proyectos } from './components/proyectos/Proyectos'
import { tokenAuth } from './config/tokenAuth'
import { AlertaState } from './context/alertas/AlertaState'
import { AuthState } from './context/autenticacion/AuthState'
import { ProyectoState } from './context/proyectos/ProyectoState'
import { TareaState } from './context/tareas/TareaState'
import { RutaPrivada } from './routes/RutaPrivada'

// revisar si tenemos un token
const token = sessionStorage.getItem('token')
if (token) tokenAuth(token)

function App() {
	return (
		<ProyectoState>
			<TareaState>
				<AlertaState>
					<AuthState>
						<Router>
							<Switch>
								<Route exact path='/' component={Login} />
								<Route exact path='/nueva-cuenta' component={NuevaCuenta} />
								<RutaPrivada exact path='/proyectos' component={Proyectos} />
							</Switch>
						</Router>
					</AuthState>
				</AlertaState>
			</TareaState>
		</ProyectoState>
	)
}

export default App
