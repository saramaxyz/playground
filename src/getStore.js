import reduxThunk from "redux-thunk"
import {createLogger} from "redux-logger"
import reducer from "./reducers"
import {configureStore} from "@reduxjs/toolkit"

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


const store = configureStore({
    reducer,
    middleware: [reduxThunk, logger]
})



export default () => {
    return store
}
