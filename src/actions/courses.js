export const CREATE_COURSE = "create_course"
export const DELETE_COURSE = "delete_course"
export const UPDATE_COURSE = "update_course"
export const BULK_UPDATE_COURSES = "bulk_update_courses"
export const STORE_UPDATE_COURSE = "store_update_course"
export const STORE_DELETE_COURSE = "store_delete_course"
export const STORE_CREATE_COURSE = "store_create_course"
export const STORE_BULK_UPDATE = "store_bulk_update"

export const bulkUpdateCourses = (userId) => {
    return {
        type:BULK_UPDATE_COURSES,
        payload:userId
    }
}

export const createCourse = ({courseId,userId}) => {
    return {
        type:CREATE_COURSE,
        payload:{
            courseId,
            userId,
            title:"",
            description:"",
            shortDescription:"",
            sections:[]
        }
    }
}

export const deleteCourse = (actionId) => {
    return {
        type: DELETE_COURSE,
        payload:{
            actionId
        }
    }
}

export const updateCourse = (payload) => {
    return {
        type:UPDATE_COURSE,
        payload
    }
}
