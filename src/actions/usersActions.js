import {actionTypes} from './actionTypes'
import axios from 'axios'

export const getUsersAction = () => {
    return async dispatch => {
        dispatch(loadingAction(true))
        const response = await axios.get('http://localhost:9999/users')
        dispatch(setUsersAction(response.data))
        dispatch(loadingAction(false))
    }
}

export const addUserAction = (user) => {
    return async () => {
        await axios.post('http://localhost:9999/users', user)
    }
}

export const setUsersAction = (users) => {
    const {SET_USERS} = actionTypes().users

    return {
        type: SET_USERS,
        payload: {users}
    }
}

export const loadingAction = (isLoading) => {
    const {LOADING} = actionTypes().users
    return {
        type: LOADING,
        payload: {isLoading}
    }
}
