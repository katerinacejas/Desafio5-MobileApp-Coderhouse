import React, { useState , useRef } from 'react'
import { Image, Text, View, TextInput, TouchableOpacity, StatusBar } from 'react-native'
import styles from './Login.style'

const Login = ({ setLoginHecho }) => {
    const [usuario, setUsuario] = useState('')
    const captarUsuario = (unUsuario) => setUsuario(unUsuario)

    const [contrasenia, setContrasenia] = useState('')
    const captarContrasenia = (unaContrasenia) => setContrasenia(unaContrasenia)

    const iniciarSesion = () => {
        if (usuario === "" || contrasenia === "") {
            return
        }
        setLoginHecho(true)
        /*
            aca haria mas funcionalidad con el usuario para verificar q exista, 
            etcetcetc
            por ahora cualquier caracter lo toma como valido para iniciar sesion
        */
    }

    const inputRef2 = useRef(null);

    return (
        <View style={styles.container}>
            <StatusBar translucent={true} backgroundColor="transparent" />
            <Image
                source={require('../../logo.png')}
                style={styles.logo}
            />
            <TextInput
                placeholder = "usuario"
                style={styles.input}
                value={usuario}
                onChangeText={captarUsuario} 
                returnKeyType="next" 
                onSubmitEditing={() => inputRef2.current.focus()}
            />
            <TextInput
                placeholder = "contraseña"
                style={styles.input}
                value={contrasenia}
                onChangeText={captarContrasenia}
                secureTextEntry={true}
                ref={inputRef2}
            />
            <TouchableOpacity style={styles.button}>
                <Text 
                    style={styles.buttonText} 
                    onPress={iniciarSesion}>
                    Iniciar Sesión
                </Text>
            </TouchableOpacity>
        </View>
    )
}

export default Login