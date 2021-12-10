import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import React, {useState} from 'react';

const Boton = (props) => {

    return (
        <View>
            <TextInput
                placeholder = "Item de la lista"
                onChangeText = {props.setText} 
                style = {styles.input}
            />
            <Button title="ADD" onPress={props.addItem}/>
        </View>
    );
};

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        marginTop: 10,
        borderWidth: 1,
        padding: 10,
    },
  });

export default Boton;
