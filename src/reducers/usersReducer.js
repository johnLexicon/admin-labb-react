import {actionTypes} from '../actions/actionTypes'

const initialState = {
    users: null,
    isLoading: true,
    userExists: false
}

const usersReducer = (state = initialState, action) => {
    const {SET_USERS, LOADING, USER_EXISTS} = actionTypes().users
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
        case USER_EXISTS: {
            const {userExists} = payload
            return {
                ...state,
                userExists
            }
        }
        default:
            return state
    }
}

export default usersReducer