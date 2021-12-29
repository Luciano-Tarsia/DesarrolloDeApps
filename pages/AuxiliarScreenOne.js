import { Image, Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { connect, useDispatch, useSelector } from 'react-redux';

import React from "react";
import { ReduxThunk } from "../store/actions/action";

const AuxiliarScreenOne = props => {

    const dispatch = useDispatch()

    const [text, setText] = React.useState("Useless Text");

    const handlerReduxThunk = (texto) => {
        if (texto.length < 3)
            alert("La palabra ingresada tiene menos de 3 caracteres")
        else
            dispatch(ReduxThunk(texto))
    }

    return(
        <View style={styles.container}>
            <Text   style={styles.text}>Aplicación creada por Luciano Tarsia en Diciembre de 2021.</Text>
            <Image  style={styles.image} source={require('../assets/images/Logo.png')} />

            <TextInput
                    placeholder = "Item de la lista"
                    onChangeText = {setText} 
                    style = {styles.input}
                />
            <Pressable 
                onPress={() =>{
                    handlerReduxThunk(text)
                }}
                style={styles.boton}
            >
                <Text style={{color:"white", fontFamily: "openSans",}}>AGREGAR</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container:  {
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        alignContent: "center",
        maxHeight: "80%",
    },
    image:      {
        width: "50%",
        height: "30%",
        resizeMode: 'contain',
        alignSelf: "center",
        margin: 0,
        borderRadius: 15,
    },
    text:       {
        textAlign: 'center',
        fontFamily:"openSans",
        width: "50%",
        alignSelf: "center",
    },
    navbar:     {
        marginTop: 5,
        marginBottom: 0,
        height: "10%",
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    input: {
        height: 40,
        margin: 11,
        marginTop: 10,
        borderWidth: 1,
        padding: 10,
    },
    boton: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 30,
        borderRadius: 5,
        elevation: 3,
        backgroundColor: "blue",
        marginRight: 10,
        marginLeft: 10,
    },
})

export default AuxiliarScreenOne