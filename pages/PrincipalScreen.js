import { Button, FlatList, StyleSheet, Text, View } from 'react-native';
import React, {useState} from 'react';

import Boton from '../components/Boton';
import Navbar from '../components/Navbar';

const PrincipalScreen = props => {

    const [lista, setLista] = useState([]);
    const [text, setText] = React.useState("Useless Text");
    const [render, setRender] = useState(false);              //Esto solo sirve para que renderice cuando llamo a itemHecho

    const addItem = () => {
        let newElement = {id: Math.random().toString(), value: text, state: false}
        setLista(lista.concat([newElement]))
    }
  
    const eliminateItem = (idItem) => {
        setLista(lista.filter((item) => item.id !== idItem))
    }
  
    const doneItem = (item) => {
        item.state = true
        setRender(!render)
    }

    return(
        <View>
        <Navbar/>
        <Boton addItem={addItem} setText={setText} />
        <FlatList
            data={lista}
            renderItem={(data) => (
            <View style={styles.cuadricula}>
                <Text
                    style={
                        data.item.state ? styles.itemHecho: styles.item
                    }
                >
                    {data.item.value}
                </Text>

                <Button
                    onPress={() => eliminateItem(data.item.id)}
                    title="Eliminate"
                />

                <Button
                    onPress={() => doneItem(data.item)}
                    title="Done"
                />
            </View>
            )}
        />
        </View>
    )
}

const styles = StyleSheet.create({
    cuadricula: {
        margin: 5,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    itemHecho: {
        color: "green",
    },
        item: {
        color: "blue",
    },
})

export default PrincipalScreen