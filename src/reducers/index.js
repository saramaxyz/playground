import {combineReducers} from "redux"
import auth from "./auth"
import customer from "./customer"

export default combineReducers({
    auth,
    customer,

})
