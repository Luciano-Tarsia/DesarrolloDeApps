import { Button, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useDispatch, useSelector } from 'react-redux';

import React from "react";
import { navigationRedux } from "../store/actions/action";
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
                    //console.log(useSelector(state => state.list.navigation))
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