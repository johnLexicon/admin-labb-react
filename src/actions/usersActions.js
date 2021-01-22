import {actionTypes} from './actionTypes'

const getFetcher = async () => {
    let fetcher = null
    if(!process.env.NODE_ENV || process.env.NODE_ENV === 'development'){
        fetcher = await import('../utils/devRequests')
    } else {
        fetcher = await import('../utils/prodRequests')
    }
    return fetcher.default
}

export const getUsersAction = () => {
    return async dispatch => {
        dispatch(loadingAction(true))
        const fetcher = await getFetcher()
        const data = await fetcher.get()
        dispatch(setUsersAction(data))
        dispatch(loadingAction(false))
    }
}

export const addUserAction = (user) => {
    return async () => {
        if(!user.avatar){
            const johnDoe = "https://cdn.pixabay.com/photo/2014/04/02/10/25/man-303792_960_720.png"
            user.avatar = johnDoe
        }
        const fetcher = await getFetcher()
        await fetcher.post(user)
    }
}

export const removeUser = userId => {
    return async dispatch => {
        const fetcher = await getFetcher()
        await fetcher.delete(userId)
        dispatch(getUsersAction())
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
