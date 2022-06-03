import {all} from "redux-saga/effects"
import courses from "./courses"


export default function*(){

    yield all([
        courses(),
    ])
}
