import React from "react"
import {Fab} from "@material-ui/core";
import PageviewIcon from "@mui/icons-material/Pageview";
import DeleteIcon from "@mui/icons-material/Delete";
import {useNavigate} from "react-router";
import Card from "../../components/Card";

const CourseCard = ({className, courseId, title, description, shortDescription, image}) => {

    const navigate = useNavigate()

    const handleClick = () => {
        navigate(`/courses/${courseId}`)
    }

    return <Card onClick={handleClick} className={"course-card " + className}>
        <img className={"dog-card__image"} src={image}/>
        <p className={"dog-card__title"}>{title}</p>
    </Card>
}

export default CourseCard
