
export const actionTypes = () => {
    return {
        admin: {
            SET_ADMIN: 'SET_ADMIN'
        },
        users: {
            GET_USERS: 'GET_USERS',
            SET_USERS: 'SET_USERS',
            LOADING: 'LOADING',
            ADD_USER: 'ADD_USER',
            DEL_USER: 'DEL_USER',
            USER_EXISTS: 'USER_EXISTS'
        }
    }
}