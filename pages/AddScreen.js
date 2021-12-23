import { KeyboardAvoidingView, Pressable, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { connect, useDispatch, useSelector } from 'react-redux';

import {Ionicons} from '@expo/vector-icons';
import { addToList } from "../store/actions/action";

const BUTTON_SIZE = 30
const BORDER_WIDTH = 1

const AddScreen = props => {
    const [text, setText] = React.useState("Useless Text");

    const [agregado, setAgregado] = React.useState(false);

    const dispatch = useDispatch()
    const categoria = useSelector(state => state.list.navigation)

    const addItem = () => {
        let newElement = {id: Math.random().toString(), value: text, cat: categoria}
        dispatch(addToList(newElement))
    }

    return(
        <KeyboardAvoidingView style={{flex:1}} behavior="height" keyboardVerticalOffset={30}>
            <View style={styles.container}>
                <TextInput
                    placeholder = "Item de la lista"
                    onChangeText = {setText} 
                    style = {styles.input}
                />
                <Pressable 
                        onPress={() =>{
                            addItem()
                            setAgregado(true)
                        }}
                        style={styles.boton}
                    >
                        <Text style={{color:"white", fontFamily: "openSans",}}>AGREGAR</Text>
                </Pressable>
                
                <TouchableOpacity style={styles.botonCerrado}
                    onPress={()=>{
                        setAgregado(false)
                    }}>
                    <Text style={{margin:5}}>{agregado? "Agregado!" : ""}</Text>
                    <Ionicons style={{margin:5}} name={agregado? 'checkmark-circle' : ""} size={24} color='black'/> 
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
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
        borderRadius: 5,
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
    botonCerrado:{
        flex: 1,
        flexDirection: "row",
        marginLeft: 10,
        marginRight: 10,
        maxHeight: "10%",
        alignItems: "center",
        justifyContent:"center",
    }
})

export default connect()(AddScreen)