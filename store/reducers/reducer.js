import { ADD_TO_LIST, ELIMINATE_FROM_LIST, NAVIGATION } from "../actions/action"

const initialState = {
    list: [],
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
                list: state.list.filter(item => item.id !== action.id)
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