import React, {useEffect, useState} from "react"
import {connect} from "react-redux";
import {useParams} from "react-router-dom";
import CourseRepository from "../../repositories/CourseRepository";
import {Button} from "@material-ui/core";

const CourseHero = ({className = ""}) => {

    const {courseId} = useParams()
    const [course,setCourse] = useState({})
    const courseRepo = new CourseRepository()
    useEffect(()=>{
        courseRepo.getCourseDetails(courseId).then((courseList) => {
            const courseDetails = courseList[0]
            const {attributes} = courseDetails
            const {title,shortDescription,description,user_id,course_id,image} = attributes
            const imageUrl = image.data.attributes.url

            setCourse({
                title,
                shortDescription,
                description,
                imageSrc:courseRepo.getImageUrl(imageUrl),
                courseId:course_id,
                userId:user_id
            })
        })
    },[])

    const {title,shortDescription,description,user_id,course_id,imageSrc} = course

    return <div className={"course-hero " + className}>
        <div className={"course-hero__text"}>
            <h3>{title}</h3>
            <p>{shortDescription}</p>
        </div>
        <div className={"course-hero__cta"}>
            <img src={imageSrc} className={"course-hero__image"}/>
            <Button>Add me to waitlist</Button>
        </div>

    </div>
}



export default connect()(CourseHero);
