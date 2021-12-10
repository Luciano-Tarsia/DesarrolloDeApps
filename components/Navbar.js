import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import React, {useState} from 'react';

const Navbar = () => {
    return (
        <View style={styles.navbar}>
            <Text style={{fontSize:15}}>Bienvenidx</Text>
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