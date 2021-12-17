import { Button, Image, StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { connect, useDispatch, useSelector } from 'react-redux';

import { addToList } from "../store/actions/action";

const AddScreen = props => {
    const dispatch = useDispatch()
    const lista = useSelector(state => state.list.list)

    return(
        <View style={styles.container}>
            <Button title="Agrego" onPress={() => dispatch(addToList({id: Math.random().toString(), value: "Forro", cat: 1}))} />
        </View>
    )
}

const styles = StyleSheet.create({
    container:  {
        marginTop: 0,
        flex: 1,
    },
    image:      {
        width: "50%",
        height: "20%",
        resizeMode: 'contain',
        alignSelf: "center",
        margin: 0,
    },
    text:       {
        textAlign: 'center',
        fontFamily:"openSans",
        margin: 5,
    },
    navbar:     {
        marginTop: 5,
        marginBottom: 0,
        height: "10%",
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
})

export default connect()(AddScreen)
//export default AddScreen