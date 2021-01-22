import {actionTypes} from '../actions/actionTypes';

const initialState = {
    admin: null
}

const adminReducer = (state = initialState, action) => {
    const {SET_ADMIN} = actionTypes().admin
    const {type, payload} = action

    switch(type){
        case SET_ADMIN: {
            const {admin} = payload
            return {
                ...state,
                admin
            }
        }
        default:
            return state
    }
}

export default adminReducer