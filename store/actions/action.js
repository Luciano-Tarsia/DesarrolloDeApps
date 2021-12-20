import {NavigationContainer} from '@react-navigation/native';

export const ADD_TO_LIST = "ADD_TO_LIST"
export const ELIMINATE_FROM_LIST = "ELIMINATE_FROM_LIST"
export const NAVIGATION = "NAVIGATION"

export const addToList = (item) => ({
    type: ADD_TO_LIST,
    item: item
})

export const eliminateFromList = (id) => ({
    type: ELIMINATE_FROM_LIST,
    id: id
})

export const navigationRedux = (categoria) => ({
    type: NAVIGATION,
    categoria: categoria
})