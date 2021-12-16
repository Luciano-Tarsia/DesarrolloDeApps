import AuxiliarScreenOne from '../pages/AuxiliarScreenOne';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const AuxNavigator = () => {
    return (
        <Stack.Navigator initialRouteName="AuxHome">
            <Stack.Screen name="AuxHome" component={AuxiliarScreenOne}/>
        </Stack.Navigator>
    );
};

export default AuxNavigator;