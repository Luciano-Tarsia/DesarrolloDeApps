import { Button, Image, StyleSheet, Text, View } from "react-native";

import Boton from "../components/Boton";
import React from "react";

//<Boton addItem={addItem} setText={setText} />

const AddScreen = props => {
    return(
        <View style={styles.container}>
            <Text>Hola</Text>
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

export default AddScreen