import { Login } from './src/screens'
import fonts from './src/global/fonts'
import { useFonts } from 'expo-font'
//import { useState } from 'react'
import BottomTabNavigator from './src/navigation/BottomTabNavigator';
import { ManejarSesion } from './src/features/ManejarSesion';
import { usarContexto } from './src/features/ManejarSesion';

export default function App() {
	const [fuentesCargadas] = useFonts(fonts)
	//const [loginHecho, setLoginHecho] = useState('')
	const loginHecho = usarContexto();

	if (!fuentesCargadas) {
	 	return null
	}

	return loginHecho ? (
			<ManejarSesion>
				<BottomTabNavigator/>
			</ManejarSesion>
		) : (
			<ManejarSesion>
				<Login/>
			</ManejarSesion>
		)
}