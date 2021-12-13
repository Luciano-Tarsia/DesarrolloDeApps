import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';

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