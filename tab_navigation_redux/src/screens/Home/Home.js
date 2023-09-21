import React from 'react'
import { Image, Text, View, FlatList, TouchableOpacity } from 'react-native'
import styles from './Home.style'
import data from '../../data/ekos'
import { useNavigation } from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Home = ({ route }) => {
    const { setLoginHecho } = route.params
    const navigation = useNavigation()

    const renderEkos = ({ item }) => (
        <View style={styles.container}>
            <View style={styles.rightContainer}>
                <View style={styles.perfil}>
                    <Image source={item.icono} style={styles.icono} />
                    <View>
                        <Text style={styles.username}>{item.nombre}</Text>
                        <Text style={styles.usuarioArroba}>{item.usuario}</Text>
                    </View>
                </View>
                <Text style={styles.textoPosteo}>¡Está escuchando {item.cancion} de {item.autor}!</Text>
                <Text style={styles.textoMomento}> {item.momento} </Text>
            </View>
            <View style={styles.leftContainer}>
                <Image source={item.portada} style={styles.portadaMusica} />
            </View>
        </View>
    )

    const cerrarSesion = () => (
        setLoginHecho(false)
    )

    return (
        <>
            {/* ekos (posteos) */}
            <View style={styles.containerGeneral}>
                <FlatList
                    data={data}
                    keyExtractor={item => item.id}
                    renderItem={renderEkos}
                />
            </View>

            {/* los botones de abajo */}
            <View style={styles.buttonContainer}>

                {/* mi perfil */}
                <TouchableOpacity style={styles.buttonMiPerfil} onPress={() => navigation.navigate('Perfil')}>
                    <Text style={styles.buttonTextMiPerfil}> Mi Perfil </Text>
                    <MaterialCommunityIcons name="human-greeting-variant" size={30} color="black" />
                </TouchableOpacity>

                {/* cerrar sesion */}
                <TouchableOpacity style={styles.button}>
                    <Text
                        style={styles.buttonText}
                        onPress={cerrarSesion}>
                        Cerrar Sesión
                    </Text>
                </TouchableOpacity>
            </View>
        </>
    )
}
export default Home