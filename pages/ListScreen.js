import { Button, FlatList, Pressable, StyleSheet, Text, View } from 'react-native';
import React, {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { backgroundColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';
import { eliminateFromList } from "../store/actions/action";
import { useNavigation } from '@react-navigation/native';

const ListScreen = props => {

    const navigation = useNavigation(); 
    const dispatch = useDispatch()

    const categoria = useSelector(state => state.list.navigation)
    const lista = useSelector(state => state.list.list).filter(item => item.cat === categoria)
    
    return(
        <View style={
            {
                flex: 1,
                alignItems: 'center',
            }
        }>
            <View>
                <Pressable 
                    onPress={()=>{
                        navigation.navigate('Add')}}
                    style={styles.boton}
                >
                    <Text style={{color:"white", fontFamily: "openSans",}}>AGREGAR IMAGEN</Text>
                </Pressable>
            </View>

            <FlatList
                contentContainerStyle = {styles.cuadricula}
                data={lista}
                renderItem={(data) => (
                    <View style={styles.item}>
                        <Text
                            style={
                                {color: "blue", marginTop:10, marginLeft:10, marginRight:10, textAlign: "center"}
                            }
                        >
                            {data.item.value}
                        </Text>
                        <Pressable 
                            onPress={() => dispatch(eliminateFromList(data.item.id))}
                            //onPress={() => console.log(data.item.id)}
                            style={styles.boton}
                        >
                            <Text style={{color:"white", fontFamily: "openSans"}}>ELIMINAR</Text>
                        </Pressable>
                    </View>
                )}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    cuadricula: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
        flexWrap: "wrap"
    },
    item: {
        margin: 5,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: "lightblue",
        borderRadius: 15,
        elevation: 5,
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