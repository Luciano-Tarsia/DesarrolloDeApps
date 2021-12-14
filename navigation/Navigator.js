import AuxiliarScreenOne from '../pages/AuxiliarScreenOne';
import AuxiliarScreenTwo from '../pages/AuxiliarScreenTwo';
import { NavigationContainer } from '@react-navigation/native';
import PrincipalScreen from '../pages/PrincipalScreen';
import React from 'react';
import WelcomeScreen from '../pages/WelcomeScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const Navigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Welcome">
                <Stack.Screen name="Welcome" component={WelcomeScreen}/>
                <Stack.Screen name="Home" component={PrincipalScreen}/>
                <Stack.Screen name="Aux1" component={AuxiliarScreenOne}/>
                <Stack.Screen name="Aux2" component={AuxiliarScreenTwo}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Navigator;