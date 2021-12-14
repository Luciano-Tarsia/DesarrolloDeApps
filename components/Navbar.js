import { Button, View } from 'react-native';

import React from 'react';
import { useNavigation } from '@react-navigation/native';

const Navbar = (props) => {

    const navigation = useNavigation(); 

    return (
        <View style={props.styles}>
            <Button title='Home' onPress={()=>{
                navigation.navigate('Home')
            }}/>
            <Button title='Ir a Aux1' onPress={()=>{
                navigation.navigate('Aux1')
            }}/>
            <Button title='Ir a Aux2' onPress={()=>{
                navigation.navigate('Aux2')
            }}/>
        </View>
    );
};

export default Navbar;