import React from "react"
import "./style.scss"
import CourseHeader from "../../components/CourseHeader";
import ContentManagement from "./ContentManagement";
import {useParams} from 'react-router-dom'

const CourseDashboard = () => {

    const {courseId} = useParams()
    return <div className={"course-dashboard"}>
        <CourseHeader className={"course-dashboard__header"}/>
        <ContentManagement className={"course-dashboard__content-management"}/>
    </div>
}

export default CourseDashboard
