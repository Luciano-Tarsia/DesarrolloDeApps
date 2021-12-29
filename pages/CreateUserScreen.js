import { Pressable, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";

import {Ionicons} from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const CreateUserScreen = () => {

    const navigation = useNavigation();

    const [username, setUsername] = useState("");
    const [aux, setAux] = useState(false);

    const createNewUser = async () => {
        console.log(username)
        if (username.length < 3)
            alert("El username es corto, debe tener más de 3 caracteres")
        else
            alert("Hola")
    }

    return (
        <View style={styles.container}>
            <Text style={styles.text} >Nos alegra que uses la aplicación!</Text>
            <View>
                <TextInput
                placeholder="Username"
                autoCompleteType="username"
                value={username}
                style={styles.inputGroup}
                onChangeText={(value) => setUsername(value)}
            />
            </View>
            <Pressable 
                    onPress={()=>{
                        //navigation.navigate('Login')}}
                        createNewUser()
                        }}
                    style={styles.boton}
                >
                    <Text style={{color:"white", fontFamily: "openSans",}}>Registrar</Text>
            </Pressable>
            <TouchableOpacity style={styles.botonCerrado}
                    onPress={()=>{
                        setAux(false)
                    }}>
                    <Text style={{margin:5, textAlign: "center"}}>{aux? "El username ingresado ya está siendo usado o es demasiado corto" : ""}</Text>
                    <Ionicons style={{margin:5}} name={aux? 'close-circle-outline' : ""} size={24} color='black'/> 
            </TouchableOpacity>
        </View>
      );
    };
    
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 35,
    },
    inputGroup: {
        flexGrow: 1,
        padding: 0,
        marginBottom: 15,
        borderBottomWidth: 1,
        borderBottomColor: "#cccccc",
    },
    boton: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 30,
        borderRadius: 5,
        elevation: 3,
        backgroundColor: "blue",
        margin: 10,
    },
    text: {
        textAlign: "center",
        marginBottom: 15,
        fontFamily: "openSans",
        fontSize: 20
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

export default CreateUserScreen