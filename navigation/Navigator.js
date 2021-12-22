import AddScreen from '../pages/AddScreen';
import AuxiliarScreenOne from '../pages/AuxiliarScreenOne';
import HomeScreen from '../pages/HomeScreen';
import ListScreen from '../pages/ListScreen';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useSelector } from 'react-redux';

const Stack = createNativeStackNavigator();

const Navigator = () => {

    const categoria = useSelector(state => state.list.navigation)

    let header = ""
    if (categoria == 1)
        header = "List - Casa"
    else if (categoria == 2)
        header = "List - Escuela"
    else if (categoria == 3)
        header = "List - Nonna"
    else
        header = "List - Otro"

    return (
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen
                name="Home"   
                component={HomeScreen}
            />
            <Stack.Screen   
                name="List"   
                component={ListScreen}
                options={{
                    title: header,
                }}      
            />
            <Stack.Screen   
                name="Add"    
                component={AddScreen}           
            />
            <Stack.Screen   
                name="Aux1"   
                component={AuxiliarScreenOne}   
            />
        </Stack.Navigator>
    );
};

export default Navigator;