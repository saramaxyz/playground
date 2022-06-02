import React from "react"
import CourseHeader from "../../components/CourseHeader";
import Courses from "./Courses"
import "./style.scss"

const CourseList = () => {

    return <div className={"course-dashboard"}>
        <CourseHeader className={"course-dashboard__header"}/>
        <Courses/>
    </div>
}

export default CourseList
