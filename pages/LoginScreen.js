import { Pressable, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";

import {Ionicons} from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const LoginScreen = () => {

    const navigation = useNavigation();

    const [username, setUsername] = useState("");
    const [aux, setAux] = useState(false);

    return (
        <View style={styles.container}>
            <Text style={styles.text} >Bienvenidx!</Text>
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
                        //navigation.navigate('Home')}}
                        setAux(true)}}
                    style={styles.boton}
                >
                    <Text style={{color:"white", fontFamily: "openSans",}}>Ingresar</Text>
            </Pressable>
            <Pressable 
                    onPress={()=>{
                        navigation.navigate('CreateUser')}}
                    style={styles.boton}
                >
                    <Text style={{color:"white", fontFamily: "openSans",}}>Registrar nuevo usuario</Text>
            </Pressable>
            <TouchableOpacity style={styles.botonCerrado}
                    onPress={()=>{
                        setAux(false)
                    }}>
                    <Text style={{margin:5}}>{aux? "El username ingresado no existe" : ""}</Text>
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

export default LoginScreen