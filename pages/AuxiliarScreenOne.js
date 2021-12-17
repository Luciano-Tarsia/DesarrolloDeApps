import { Button, Image, StyleSheet, Text, View } from "react-native";

import React from "react";

const AuxiliarScreenOne = props => {
    return(
        <View style={styles.container}>
            <Text   style={styles.text}>Aplicación creada por Luciano Tarsia en Diciembre de 2021.</Text>
            <Image  style={styles.image} source={require('../assets/images/Logo.png')} />
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
})

export default AuxiliarScreenOne