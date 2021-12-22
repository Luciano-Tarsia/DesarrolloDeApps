import {NavigationContainer} from '@react-navigation/native';

export const ADD_TO_LIST = "ADD_TO_LIST"
export const ELIMINATE_FROM_LIST = "ELIMINATE_FROM_LIST"
export const NAVIGATION = "NAVIGATION"
export const CONFIRM_REMOVE_ITEM = 'CONFIRM_REMOVE_ITEM';
export const CONFIRM_NOT_REMOVE_ITEM = 'CONFIRM_NOT_REMOVE_ITEM';

export const addToList = (item) => ({
    type: ADD_TO_LIST,
    item: item
})

export const eliminateFromList = (id) => ({
    type: ELIMINATE_FROM_LIST,
    id: id
})

export const confirmRemoveItem = () => ({
    type: CONFIRM_REMOVE_ITEM,
  });

export const confirmNotRemoveItem = () => ({
    type: CONFIRM_NOT_REMOVE_ITEM,
});

export const navigationRedux = (categoria) => ({
    type: NAVIGATION,
    categoria: categoria
})