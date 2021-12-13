import { Button, StyleSheet, Text, View } from "react-native";

import React from "react";

const WelcomeScreen = props => {
    return(
    
    <View style={styles.bienvenida}>
        <Text style={{textAlign: 'center', marginBottom:10}}>Bienvenidx a la aplicación</Text>
        <Button title="Avanzar" onPress={props.setAvanzar}/>
    </View>
    )
}

const styles = StyleSheet.create({
    bienvenida: {
        flex: 1,
        position: 'absolute',
        alignSelf: 'center',
        alignContent: "center",
        marginTop: 320,
        borderColor: "black",
        elevation: 25,
        borderRadius: 25,
        padding: 15,
    }
})

export default WelcomeScreen