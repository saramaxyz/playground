import {takeEvery} from "redux-saga/effects"
import {
    CREATE_COURSE,
    DELETE_COURSE,
    STORE_BULK_UPDATE,
    STORE_CREATE_COURSE,
    STORE_DELETE_COURSE,
    UPDATE_COURSE
} from "../actions";

const createCourse = ({type,payload}) => {
    const {userId,courseId} = payload


}

const deleteCourse = () => {

}

const updateCourse = () => {

}


export default function* rootSaga(){
    yield takeEvery(CREATE_COURSE,createCourse)
    yield takeEvery(DELETE_COURSE,deleteCourse)
    yield takeEvery(UPDATE_COURSE,updateCourse)
}
