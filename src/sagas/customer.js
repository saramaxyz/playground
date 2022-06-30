import {put, takeEvery, select, call} from "redux-saga/effects"
import {
    BULK_UPDATE_USER, FETCH_USER,
    STORE_DELETE_COURSE,
    STORE_SET_USER,
    STORE_USER_ADD_COURSE, STORE_USER_DELETE_COURSE,
    USER_ADD_COURSE,
    USER_DELETE_COURSE
} from "../actions";
import CustomerRepository from "../repositories/CustomerRepository";

const getCustomer = state => state.customer

function* fetchUser({type, payload}) {
    const repo = new CustomerRepository()
    const {userId} = payload
    const user = yield repo.getUser(userId)
    yield put({
        type: STORE_SET_USER,
        payload: user
    })


}


function* addCourse({type, payload}) {
    const repo = new CustomerRepository()
    let user = Object.assign(yield select(getCustomer))
    const {courseId, userId, email, fullName} = payload

    if (user.courses === undefined) {
        user.courses = []
        user.email = email
        user.full_name = fullName
        user.user_id = userId
    }
    if (user.courses.filter((course) => course.courseId === courseId).length === 0)
        user.courses.push({courseId})


    yield put({
        type: STORE_USER_ADD_COURSE,
        payload: {courseId}
    })
    repo.updateUser(user)
        .then()
        .catch()
        .finally()


}

function* deleteCourse({type, payload}) {
    const repo = new CustomerRepository()
    const user = Object.assign(yield select(getCustomer))
    const {courseId, userId} = payload

    if (user.courses.length > 0) {
        user.courses = user.courses.filter((course) => course.courseId !== courseId)
    }

    repo.bulkUpdate(user, userId)
        .then()
        .catch()
        .finally()
    yield put({
        type: STORE_USER_DELETE_COURSE,
        payload: {courseId}
    })
}


export default function* rootSaga() {
    yield takeEvery(FETCH_USER, fetchUser)
    yield takeEvery(USER_ADD_COURSE, addCourse)
    yield takeEvery(USER_DELETE_COURSE, deleteCourse)
}
