import { Button, FlatList, StyleSheet, Text, TextInput, View } from 'react-native';
import React, {useState} from 'react';

export default function App() {

  const [lista, setLista] = useState([]);
  const [text, setText] = React.useState("Useless Text");

  addItem = () => {
      let newElement = {id: Math.random().toString(), value: text}
      setLista(lista.concat([newElement]))
  }

  const renderItem = ({ item }) => (
    <View>
      <Text style={styles.imag}>{item.value}</Text>
    </View>
  );

  return (
    <View>
      <View>
          <TextInput
              placeholder = "Item de la lista"
              onChangeText = {setText} 
              style = {styles.input}
          />
          <Button title="ADD" onPress={addItem}/>
      </View>
      <FlatList
        data={lista}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  imag: {
    color: "white",
    margin: 5,
    flex: 1,
    backgroundColor: 'blue',
    textAlign: "center",
    height: "80%",
  },
  input: {
    marginTop: 50,
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});