import {createStore} from 'redux'
import {adminReducer} from './reducers/adminReducer';

export default createStore(adminReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
