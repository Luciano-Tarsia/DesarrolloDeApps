import AddScreen from '../pages/AddScreen';
import AuxiliarScreenOne from '../pages/AuxiliarScreenOne';
import HomeScreen from '../pages/HomeScreen';
import ListScreen from '../pages/ListScreen';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const Navigator = () => {
    return (
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen   name="Home"   component={HomeScreen}          />
            <Stack.Screen   name="List"   component={ListScreen}          />
            <Stack.Screen   name="Add"    component={AddScreen}           />
            <Stack.Screen   name="Aux1"   component={AuxiliarScreenOne}   />
        </Stack.Navigator>
    );
};

export default Navigator;