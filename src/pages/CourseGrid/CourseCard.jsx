import React from "react"
import {Fab} from "@material-ui/core";
import PageviewIcon from "@mui/icons-material/Pageview";
import DeleteIcon from "@mui/icons-material/Delete";
import {useNavigate} from "react-router";
import Card from "../../components/Card";
import CourseRepository from "../../repositories/CourseRepository";
import {Button} from "@mui/material";

const CourseCard = ({className, courseId, title, description, shortDescription, image}) => {

    const navigate = useNavigate()
    const courseRepo = new CourseRepository()
    const imageUrl = courseRepo.getImageUrl(image.data.attributes.url)

    const handleClick = () => {
        navigate(`/courses/${courseId}`)
    }

    return <Card onClick={handleClick} className={"course-card " + className}>
        <img className={"dog-card__image"} src={imageUrl}/>
        <p className={"dog-card__title"}>{title}</p>
        <Button onClick={handleClick} color={"secondary"}>Details</Button>
    </Card>
}

export default CourseCard
