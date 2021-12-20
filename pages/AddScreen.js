import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import { connect, useDispatch, useSelector } from 'react-redux';

import { addToList } from "../store/actions/action";

const AddScreen = props => {
    const [text, setText] = React.useState("Useless Text");

    const dispatch = useDispatch()

    const addItem = () => {
        let newElement = {id: Math.random().toString(), value: text, cat: 1}
        dispatch(addToList(newElement))
    }

    return(
        <View style={styles.container}>
            <TextInput
                placeholder = "Item de la lista"
                onChangeText = {setText} 
                style = {styles.input}
            />
            <Pressable 
                    onPress={() => addItem()}
                    style={styles.boton}
                >
                    <Text style={{color:"white", fontFamily: "openSans",}}>AGREGAR</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container:  {
        marginTop: 0,
        flex: 1,
    },

    boton: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 30,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: "blue",
        marginRight: 10,
        marginLeft: 10,
    },
    input: {
        height: 40,
        margin: 11,
        marginTop: 10,
        borderWidth: 1,
        padding: 10,
    },
})

export default connect()(AddScreen)