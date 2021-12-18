import { Button, FlatList, Pressable, StyleSheet, Text, View } from 'react-native';
import React, {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { eliminateFromList } from "../store/actions/action";
import { useNavigation } from '@react-navigation/native';

const ListScreen = props => {

    const navigation = useNavigation(); 

    const dispatch = useDispatch()
    const lista = useSelector(state => state.list.list)

    
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
                    <Text style={{color:"white", fontFamily: "openSans",}}>AGREGAR IMAGEN</Text>
                </Pressable>
            </View>

            <FlatList
                data={lista}
                renderItem={(data) => (
                <View style={styles.cuadricula}>
                    <Text
                        style={
                            styles.item
                        }
                    >
                        {data.item.value}
                    </Text>
                    <Pressable 
                        onPress={() => dispatch(eliminateFromList(data.item.id))}
                        //onPress={() => console.log(data.item.id)}
                        style={styles.boton}
                    >
                        <Text style={{color:"white", fontFamily: "openSans",}}>ELIMINAR</Text>
                    </Pressable>
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