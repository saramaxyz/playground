export const USER_ADD_COURSE = "user_add_course"
export const USER_DELETE_COURSE = "user_delete_course"

export const BULK_UPDATE_USER = "bulk_update_user"

export const STORE_USER_ADD_COURSE = "store_user_add_course"
export const STORE_USER_DELETE_COURSE = "store_user_delete_course"
export const STORE_SET_USER = "store_set_user"

export const FETCH_USER = "fetch_user"

export const userAddCourse = (courseId) => {
    return {
        type: USER_ADD_COURSE,
        payload:{
            courseId
        }
    }
}

export const userDeleteCourse  = (courseId) => {
    return {
        type:USER_DELETE_COURSE,
        payload:{
            courseId
        }
    }
}

export const fetchUser = (userId) => {
    return {
        type:FETCH_USER,
        payload:{
            userId
        }
    }
}

export const bulkUpdateUser = ( userObject ) => {
    return {
        type:BULK_UPDATE_USER,
        payload:userObject
    }
}
