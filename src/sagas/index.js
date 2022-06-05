import {all} from "redux-saga/effects"
import customer from "./customer"

export default function*(){

    yield all([
        customer(),
    ])
}
