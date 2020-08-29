import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import {createLogger} from 'redux-logger'
import {persistStore, persistCombineReducers} from 'redux-persist';
import {createBlacklistFilter} from 'redux-persist-transform-filter';
import AsyncStorage from '@react-native-community/async-storage';

import { appReducer } from '../reducer/appReducer'

const saveSubsetBlacklistFilter = createBlacklistFilter('',[])
const config ={
    key: 'primary',
    storage: AsyncStorage,
    transform: [saveSubsetBlacklistFilter],
    blacklist: ['appReducer'],
    timeout: 0,
}

const reducer = persistCombineReducers(config,{
    appReducer,
})
const root = (state,action)=>{
    return reducer(state,action)
}
let store = compose(applyMiddleware(thunk,createLogger())(createStore)(root))
persistStore(store,()=>{})
export default store

