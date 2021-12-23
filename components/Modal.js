import {
  Button,
  Modal,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { confirmNotRemoveItem, confirmRemoveItem } from '../store/actions/action';
import { useDispatch, useSelector } from 'react-redux';

import Boton from './Boton';
import React from 'react';

function DeleteModal() {
  const dispatch = useDispatch();
  const itemSelected = useSelector(state => state.list.selected);

  const handleConfirmDelete = () => dispatch(confirmRemoveItem());

  const handleConfirmNotDelete = () => dispatch(confirmNotRemoveItem());

  return (
    <Modal animationType="slide" visible={!!itemSelected} transparent>
        <View style={styles.modalContainer}>
            <View style={[styles.modalContent, styles.shadow]}>
                <Text style={styles.modalMessage}>¿Está seguro que desea borrar?</Text>
                <Text style={styles.modalTitle}>{itemSelected && itemSelected.value}</Text>
                <View style={styles.botones}>
                    <Pressable 
                        onPress={handleConfirmDelete}
                        style={styles.boton}
                    >
                        <Text style={{color:"white", fontFamily: "openSans",}}>ELIMINAR</Text>
                    </Pressable>
                    <Pressable 
                        onPress={handleConfirmNotDelete}
                        style={styles.boton}
                    >
                        <Text style={{color:"white", fontFamily: "openSans",}}>NO ELIMINAR</Text>
                    </Pressable>
                </View>
            </View>
        </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    modalContent: {
        width: "70%",
        height: "30%",
        padding: 30,
        backgroundColor: 'white',
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    modalMessage: {
        fontSize: 22,
        textAlign: "center"
    },
    modalTitle: {
        fontSize: 18,
        textAlign: "center",
    },
    shadow: {
        elevation: 3,
        borderRadius: 5
    },
    botones: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
        maxHeight: "20%",
    },
    boton: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        backgroundColor: "blue",
        width: "45%",
        height: "70%",
        margin: 5,
    },
})

export default DeleteModal;