import { URL_API } from "../../constants/Database.js";

export const ADD_TO_LIST = "ADD_TO_LIST"
export const ELIMINATE_FROM_LIST = "ELIMINATE_FROM_LIST"
export const NAVIGATION = "NAVIGATION"
export const CONFIRM_REMOVE_ITEM = 'CONFIRM_REMOVE_ITEM';
export const CONFIRM_NOT_REMOVE_ITEM = 'CONFIRM_NOT_REMOVE_ITEM';
export const REDUX_THUNK = 'REDUX_THUNK';

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

export const ReduxThunk = (texto) => {
    return async dispatch => {
        try {
            const response = await fetch(`${URL_API}ordenes.json` , {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json',
                },
                body: JSON.stringify({
                    date: Date.now(),
                    text: texto,
                })
            });

            const result = await response.json();
            console.log(result)

            dispatch({
                type: REDUX_THUNK,
            });
        } catch (error) {
            console.log(error.message)
        }
    }
}