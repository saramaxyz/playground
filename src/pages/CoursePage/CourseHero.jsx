import React, {useEffect, useState} from "react"
import {connect} from "react-redux";
import {useParams} from "react-router-dom";
import CourseRepository from "../../repositories/CourseRepository";
import {Button} from "@material-ui/core";
import CustomerRepository from "../../repositories/CustomerRepository";
import {userAddCourse} from "../../actions";

/*
{
  "familyName": "Vuruskaner",
  "givenName": "Oguz",
  "email": "oguzvuruskaner@eyecuvision.com",
  "imageUrl": "https://lh3.googleusercontent.com/a/AATXAJwP6fjwtuwNr5A-oJfgu0FfBngmqAnNElImY6ua=s96-c",
  "googleId": "110219120911981246133"
}

 */


const CourseHero = ({auth, customer, dispatchUserAdd, className = ""}) => {

    const {googleId, givenName = "", familyName = "", email = ""} = auth
    const {courseId} = useParams()
    const [course, setCourse] = useState({})
    const courseRepo = new CourseRepository()
    const {courses = []} = customer

    useEffect(() => {
        courseRepo.getCourseDetails(courseId).then((courseList) => {
            const courseDetails = courseList[0]
            const {attributes} = courseDetails
            const {title, shortDescription, description, user_id, course_id, image} = attributes
            const imageUrl = image.data.attributes.url

            setCourse({
                title,
                shortDescription,
                description,
                imageSrc: courseRepo.getImageUrl(imageUrl),
                courseId: course_id,
                userId: user_id
            })
        })
    }, [])
    const {title, shortDescription, description, imageSrc} = course
    const handleClick = () => {
        const {courseId} = course
        dispatchUserAdd({
            courseId,
            email,
            userId: googleId,
            fullName: givenName + " " + familyName,
        })

    }
    courses.filter((course) => {
        return parseFloat(course.courseId) === parseFloat(courseId)
    })

    return <div className={"course-hero " + className}>
        <div className={"course-hero__text"}>
            <h3>{title}</h3>
            <p>{shortDescription}</p>
        </div>
        <div className={"course-hero__cta"}>
            <img src={imageSrc} className={"course-hero__image"}/>
            {
                (courses.filter((course) => parseFloat(course.courseId) === parseFloat(courseId)).length > 0) ?
                    <Button disabled onClick={handleClick}>Add me to waitlist</Button> :
                    <Button onClick={handleClick}>Add me to waitlist</Button>
            }
        </div>

    </div>
}

const mapDispatchToProps = (dispatch) => {
    return {
        dispatchUserAdd: (courseId) => dispatch(userAddCourse(courseId))
    }
}

const mapStateToProps = ({auth, customer}) => ({auth, customer})

export default connect(mapStateToProps, mapDispatchToProps)(CourseHero);
