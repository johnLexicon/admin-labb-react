import {combineReducers} from 'redux'
import adminReducer from './adminReducer'
import usersReducer from './usersReducer'

export default combineReducers({
    adminReducer,
    usersReducer
})