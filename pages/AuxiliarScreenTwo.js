import { Button, Image, StyleSheet, Text, View } from "react-native";

import Navbar from "../components/Navbar";
import React from "react";

const AuxiliarScreenTwo = props => {
    return(
        <View style={styles.container}>
            <Navbar styles={styles.navbar}/>
            <Text   style={styles.text}>Pantalla dos</Text>
            <Image  style={styles.image} source={require('../assets/images/Logo.png')} />
        </View>
    )
}

const styles = StyleSheet.create({
    container:  {
        marginTop: 0,
        flex: 1,
    },
    image:      {
        width: "50%",
        height: "20%",
        resizeMode: 'contain',
        alignSelf: "center",
        margin: 0,
    },
    text:       {
        textAlign: 'center',
        fontFamily:"openSans",
        margin: 5,
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

export default AuxiliarScreenTwo