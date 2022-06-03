import React from "react"
import avatar from "./avatar.webp"
import "./style.scss"
const CourseHeader = ({className = ""}) => {

    return <div className={"course-header " + className}>
        <img src={avatar}>

        </img>
    </div>
}

export default CourseHeader
