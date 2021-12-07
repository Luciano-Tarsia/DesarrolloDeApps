import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import React, {useState} from 'react';

const Boton = () => {
    const [lista, setLista] = useState([]);
    const [text, setText] = React.useState("Useless Text");

    addItem = () => {
        let newElement = {id: Math.random().toString(), value: text}
        setLista(lista.concat([newElement]))
        listaPrincipal.lp = lista

    }

    return (
        <View>
            <TextInput
                placeholder = "Item de la lista"
                onChangeText = {setText} 
                style = {styles.input}
            />
            <Button title="ADD" onPress={addItem}/>
        </View>
    );
};

const styles = StyleSheet.create({
    input: {
        marginTop: 50,
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
  });

export default Boton;
