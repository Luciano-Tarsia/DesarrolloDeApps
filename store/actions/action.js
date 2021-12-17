export const ADD_TO_LIST = "ADD_TO_LIST"
export const ELIMINATE_FROM_LIST = "ELIMINATE_FROM_LIST"

export const addToList = (item) => ({
    type: ADD_TO_LIST,
    item: item
})

export const eliminateFromList = (id) => ({
    type: ADD_TO_LIST,
    id: id
})