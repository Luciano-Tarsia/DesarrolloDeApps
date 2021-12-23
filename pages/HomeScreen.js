import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import React from "react";
import { navigationRedux } from "../store/actions/action";
import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {

    const navigation = useNavigation();
    const dispatch = useDispatch()

    return(
        <View style={styles.general}>
            <View style={styles.fila}>
                <TouchableOpacity style={styles.opcion} 
                onPress={()=>{
                    dispatch(navigationRedux(1))
                    navigation.navigate('List')
                }}>
                    <Text style={styles.text}>Casa</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    style={styles.opcion} 
                    onPress={()=>{
                        dispatch(navigationRedux(2))
                        navigation.navigate('List')
                    }}>
                    <Text style={styles.text}>Escuela</Text>
                </TouchableOpacity>
            </View>
            
            <View style={styles.fila}>
                <TouchableOpacity 
                    style={styles.opcion} 
                    onPress={()=>{
                        dispatch(navigationRedux(3))
                        navigation.navigate('List')
                    }}>
                    <Text style={styles.text}>Nonna</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    style={styles.opcion} 
                    onPress={()=>{
                        dispatch(navigationRedux(4))
                        navigation.navigate('List')
                    }}>
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
        alignItems: "stretch",
        maxHeight: "80%",
    },
    fila: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
        maxHeight: "40%",
    },
    opcion:       {
        width: "30%",
        height: "60%",
        backgroundColor: "blue",
        borderRadius: 5,
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