import React from 'react';
import { useFonts } from 'expo-font';
import BottomTabNavigator from './src/navigation/BottomTabNavigator';
import { ManejarSesion, usarContexto } from './src/features/ManejarSesion';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Login } from './src/screens';
import fonts from './src/global/fonts'

export default function App() {
	const [fuentesCargadas] = useFonts(fonts)
	//const [loginHecho, setLoginHecho] = useState('')
	const loginHecho = usarContexto();

	if (!fuentesCargadas) {
		return null
	}

	return (
		// loginHecho ? (
		// 	<ManejarSesion>
		// 		<BottomTabNavigator />
		// 	</ManejarSesion>
		// ) : (
		// 	<ManejarSesion>
		// 		<Login />
		// 	</ManejarSesion>
		// )

		// <ManejarSesion>
		// 	<NavigationContainer>
		// 		<Stack.Navigator>
		// 			{loginHecho ? (
		// 				<Stack.Screen name="BottomTabNavigator" component={BottomTabNavigator} />
		// 			) : (
		// 				<Stack.Screen name="Login" component={Login} />
		// 			)}
		// 		</Stack.Navigator>
		// 	</NavigationContainer>
		// </ManejarSesion >
		<ManejarSesion>
			{loginHecho ? (
				<BottomTabNavigator />
			) : (
				<Login />
			)}
		</ManejarSesion >
	)
}