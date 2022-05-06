import reduxThunk from "redux-thunk"
import {createLogger} from "redux-logger"
import reducer from "./reducers"
import {configureStore} from "@reduxjs/toolkit"
import storage from 'redux-persist/lib/storage'
import {persistReducer, persistStore} from "redux-persist";


const IGNORED_ACTIONS = [
]

const predicate = (ignoredActions) => (getState,{type,_}) => {
    for(let actionType of ignoredActions){
        if(actionType === type) return false
    }
    return true
}

const logger = createLogger({
    predicate:predicate(IGNORED_ACTIONS)
})


const persistConfig = {
    key: 'root',
    version: 1,
    storage,
}

const persistedReducer = persistReducer(persistConfig, reducer)


export default () => {
    const store = configureStore({
        reducer:persistedReducer,
        middleware: [reduxThunk, logger]
    })

    const persistor = persistStore(store)
    return { store, persistor }
}
