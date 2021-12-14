import { Button, Image, StyleSheet, Text, View } from "react-native";

import Navbar from '../components/Navbar';
import React from "react";
import { useNavigation } from '@react-navigation/native';

const WelcomeScreen = props => {

    const navigation = useNavigation(); 

    return(
        <View style={styles.general}>
            <View style={styles.bienvenida}>
                <Text style={styles.text}> Bienvenidx a la aplicación </Text>
                <Button title="Avanzar" onPress={()=>{
                        navigation.navigate('Home')}} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    general:    {
        flex: 1,
        justifyContent: "center",
    },
    bienvenida: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    },
    text:       {
        textAlign:  'center', 
        marginBottom:   10, 
        fontFamily: "openSans",
    },
})

export default WelcomeScreen