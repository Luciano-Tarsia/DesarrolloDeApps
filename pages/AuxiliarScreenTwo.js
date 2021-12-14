import { Button, Image, StyleSheet, Text, View } from "react-native";

import React from "react";

const AuxiliarScreenTwo = props => {
    return(
    
    <View style={styles.bienvenida}>
        <Text style={{textAlign: 'center', marginBottom:10, fontFamily:"openSans"}}>Pantalla dos</Text>
        <Image style={{width:"30%"}} source={require('../assets/images/Logo.png')}/>
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

export default AuxiliarScreenTwo