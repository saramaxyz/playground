import {
    CREATE_COURSE,
    DELETE_COURSE, STORE_BULK_UPDATE,
    STORE_CREATE_COURSE,
    STORE_DELETE_COURSE,
    STORE_UPDATE_COURSE,
    UPDATE_COURSE
} from "../actions";

export default (state = [], {type, payload={}}) => {
    const {title,description,shortDescription,userId,courseId} = payload || {}

    switch (type) {
        case STORE_BULK_UPDATE:
            return payload
        case STORE_UPDATE_COURSE:
            let retObj = state.filter((course) => course.courseId === courseId)
            return [
                ...retObj,
                {
                    courseId,
                    title,
                    description,
                    shortDescription,
                    sections:[],
                    userId
                }
            ]
        case STORE_DELETE_COURSE:
            return state.filter((course) => course.courseId !== courseId)

        case STORE_CREATE_COURSE:
            return [
                ...state,
                {
                    courseId,
                    title,
                    description,
                    shortDescription,
                    sections:[],
                    userId
                }
            ]

        default:
            return state

    }
}
