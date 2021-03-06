import React, {useEffect, useState} from "react"
import {connect} from "react-redux";
import CourseRepository from "../../repositories/CourseRepository";
import CourseCard from "./CourseCard"
import {bulkUpdateUser} from "../../actions";

const CourseManagement = ({}) => {

    const courseRepo = new CourseRepository()
    const [courses, setCourses] = useState([])
    useEffect(() => {
        courseRepo.getCourses().then(courseObjects => {
            setCourses(courseObjects.map((course) => course.attributes))
        })
    }, [])
    return <div className={"training-management"}>
        {
            courses.map(({course_id, user_id, title, image}) => <CourseCard key={course_id} userId={user_id}
                                                                                   className={"training-management__card"}
                                                                                   image={image} courseId={course_id}
                                                                                   title={title}
            />)
        }

    </div>
}

const mapDispatchToProps = (dispatch) => ({
    dispatchBulkUpdate : (userObject) => dispatch(bulkUpdateUser(userObject))
})

export default connect(null,mapDispatchToProps)(CourseManagement)
