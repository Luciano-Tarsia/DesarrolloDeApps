import { Button, Image, StyleSheet, Text, View } from "react-native";

import React from "react";

const AuxiliarScreenOne = props => {
    return(
        <View style={styles.container}>
            <Text   style={styles.text}>Pantalla uno</Text>
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
        borderRadius: 15,
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

export default AuxiliarScreenOne