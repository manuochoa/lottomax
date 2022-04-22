import { combineReducers, createStore } from 'redux';
import commonReducer from './commonReducer';

let reducers = combineReducers({
    common: commonReducer  
})

let store = createStore(reducers)

window.store = store

export default store