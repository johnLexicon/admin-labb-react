import {actionTypes} from '../actions/actionTypes'

const initialState = {
    users: null,
    isLoading: true
}

const usersReducer = (state = initialState, action) => {
    const {SET_USERS, LOADING} = actionTypes().users
    const {type, payload} = action

    switch(type){
        case SET_USERS: {
            const {users} = payload
            return {
                ...state,
                users
            }
        }
        case LOADING: {
            const {isLoading} = payload
            return {
                ...state,
                isLoading
            }
        }
        default:
            return state
    }
}

export default usersReducer