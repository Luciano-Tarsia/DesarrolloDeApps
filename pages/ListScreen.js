import { Button, FlatList, Pressable, StyleSheet, Text, View } from 'react-native';
import React, {useState} from 'react';

import Boton from '../components/Boton';
import { useNavigation } from '@react-navigation/native';

const ListScreen = props => {

    const navigation = useNavigation(); 

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
        <View style={
            {
                flex: 1,
                alignItems: 'center',
            }
        }>
            <View>
                <Pressable 
                    onPress={()=>{navigation.navigate('Add')}}
                    style={styles.boton}
                >
                    <Text style={{color:"white"}}>AGREGAR IMAGEN</Text>
                </Pressable>
            </View>

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
    navbar: {
        marginTop: 5,
        marginBottom: 0,
        height: "20%",
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    boton: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 30,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: "blue",
        margin: 10,
    },
})

export default ListScreen