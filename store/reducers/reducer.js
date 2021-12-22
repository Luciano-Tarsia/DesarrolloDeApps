import { ADD_TO_LIST, CONFIRM_NOT_REMOVE_ITEM, CONFIRM_REMOVE_ITEM, ELIMINATE_FROM_LIST, NAVIGATION } from "../actions/action"

const initialState = {
    list: [],
    selected: null,
    navigation: 1,
}

const listReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_TO_LIST:
            return {
                ...state,
                list: [...state.list, action.item],
            }
        case ELIMINATE_FROM_LIST:
            return {
                ...state,
                selected: state.list.find(item => item.id === action.id),
            }
        case CONFIRM_REMOVE_ITEM:
            return{
                ...state,
                selected: null,
                list: state.list.filter(item => item.id !== state.selected.id),
            }
        case CONFIRM_NOT_REMOVE_ITEM:
            return{
                ...state,
                selected: null,
            }
        case NAVIGATION:
            return {
                ...state,
                navigation: action.categoria
            }
        default:
            return state
    }
}

export default listReducer