import {BULK_UPDATE_USER, STORE_SET_USER, STORE_USER_ADD_COURSE, STORE_USER_DELETE_COURSE} from "../actions";

const defaultState = {
    courses:[]
}
export default (state = defaultState, {type, payload}) => {

    if(payload === null){
        payload = defaultState
    }

    const {courseId} = payload || {}


    switch (type) {
        case STORE_SET_USER:
            return payload
        case STORE_USER_ADD_COURSE:
            return Object.assign({},state,{
                courses:[...state.courses.filter(course => course.courseId !== courseId),courseId]
            })
        case STORE_USER_DELETE_COURSE:
            return Object.assign({},state,{
                courses: state.courses.filter(listCourseId => listCourseId !== courseId)
            })
        default:
            return state
    }
}
