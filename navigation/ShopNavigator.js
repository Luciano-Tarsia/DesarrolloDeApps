import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';

import AuxiliarScreenOne from '../pages/AuxiliarScreenOne';
import AuxiliarScreenTwo from '../pages/AuxiliarScreenTwo';
import { NavigationContainer } from '@react-navigation/native';
import PrincipalScreen from '../pages/PrincipalScreen';
import WelcomeScreen from '../pages/WelcomeScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const ShopNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="welcome" component={WelcomeScreen}/>
                <Stack.Screen name="home" component={PrincipalScreen}/>
                <Stack.Screen name="aux1" component={AuxiliarScreenOne}/>
                <Stack.Screen name="aux2" component={AuxiliarScreenTwo}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default ShopNavigator;