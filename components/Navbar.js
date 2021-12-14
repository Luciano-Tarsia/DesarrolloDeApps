import { Button, StyleSheet, Text, View } from 'react-native';
import React, {useState} from 'react';

import { useNavigation } from '@react-navigation/native';

const Navbar = () => {

    const navigation = useNavigation()

    return (
        <View style={styles.navbar}>
            <Text style={{fontSize:15, fontFamily:"openSans"}}>Bienvenidx</Text>
            <Button title='Ir a AuxUno' onPress={()=>{
                navigation.navigate('aux1')
            }}/>
        </View>
    );
};

const styles = StyleSheet.create({
    navbar: {
        marginTop: 40,
        marginBottom: 0,
        borderWidth: 1,
        height: 30,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'lightblue',
    },
  });

export default Navbar;