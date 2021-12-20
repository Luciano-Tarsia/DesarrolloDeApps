import { Button, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

import React from "react";
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';

const HomeScreen = () => {

    const navigation = useNavigation(); 

    return(
        <View style={styles.general}>
            <View style={styles.fila}>
                <TouchableOpacity style={styles.opcion} onPress={()=>{
                        navigation.navigate('List')}}>
                    <Text style={styles.text}>Casa</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.opcion} onPress={()=>{
                        navigation.navigate('List')}}>
                    <Text style={styles.text}>Escuela</Text>
                </TouchableOpacity>
            </View>
            
            <View style={styles.fila}>
                <TouchableOpacity 
                    style={styles.opcion} 
                    onPress={()=>{
                        navigation.navigate('List')}}>
                    <Text style={styles.text}>Nonna</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.opcion} onPress={()=>{
                        navigation.navigate('List')}}>
                    <Text style={styles.text}>Otro</Text>
                </TouchableOpacity>
            </View>
        </View>
    )

    
}



const styles = StyleSheet.create({
    general:    {
        flex: 1,
        flexDirection: "column",
        justifyContent: "flex-start",
    },
    fila: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        maxHeight: "30%",
    },
    opcion:       {
        width: "30%",
        height: "50%",
        backgroundColor: "blue",
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center"
    },
    text:       { 
        fontFamily: "openSans",
        fontSize: 20,
        color: "white",
    },
})

export default HomeScreen