import { FlatList, Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import DeleteModal from '../components/Modal';
import React from 'react';
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
            <DeleteModal/>
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
                columnWrapperStyle={{flex: 1, justifyContent: "space-around", margin:20}}
                data={lista}
                numColumns={2}
                renderItem={(data) => (
                    <View style={styles.item}>
                        <Image 
                            style = {styles.image}
                            source = {{uri: data.item.imagen}}
                        />
                        <Text
                            style={
                                {color: "blue", marginLeft:10, marginRight:10, textAlign: "center"}
                            }
                        >
                            {data.item.value}
                        </Text>
                        <Pressable 
                            onPress={() => dispatch(eliminateFromList(data.item.id))}
                            style={styles.botonEliminar}
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
    item: {
        marginLeft: 25,
        marginRight: 25,
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: "lightblue",
        borderRadius: 5,
        elevation: 5,
        width: 150,
        height: 200
    },
    boton: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 30,
        borderRadius: 5,
        elevation: 3,
        backgroundColor: "blue",
        margin: 10,
    },
    botonEliminar: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 7,
        paddingHorizontal: 20,
        borderRadius: 5,
        elevation: 3,
        backgroundColor: "blue",
        marginBottom: 10,
    },
    image: {
        width: '80%',
        height: '50%',
        borderRadius: 5,
        marginTop:10
    }
})

export default ListScreen