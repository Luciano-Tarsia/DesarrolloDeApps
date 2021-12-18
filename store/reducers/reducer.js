import { ADD_TO_LIST, ELIMINATE_FROM_LIST } from "../actions/action"

const initialState = {
    list: [{id: Math.random().toString(), value: "Hola Mundo", cat: 1}],
}

const listReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_TO_LIST:
            return {
                list: [...state.list, action.item]
            }
        case ELIMINATE_FROM_LIST:
            return {
                list: state.list.filter(item => item.id !== action.id)
            }
        default:
            return state
    }
}

export default listReducer