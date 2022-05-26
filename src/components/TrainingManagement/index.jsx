import React from "react"
import {useNavigate} from "react-router";
import down from "../../assets/down.png"
import sit from "../../assets/sit.png"
import recall from "../../assets/recall.svg"
import cgcImage from "../../assets/cgc_image.jpg"
import touch from "../../assets/touch.png"
import wait from "../../assets/wait.svg"
import stand from "../../assets/stand.svg"
import "./style.scss"
import {Button} from "@mui/material";

const TrainingCard = ({className = "", name, mediaUrl, owner,route}) => {

    const navigate = useNavigate()

    return <div
        className={"training-card " + className}

    >
        <img className={"training-card__image"} src={mediaUrl}/>
        <p className={"training-card__title"}>{name}</p>
        {/*<p className={"training-card__owner"}>by {owner}</p>*/}
        <Button onClick={() => navigate(`/training/${route}`)} variant="contained" color="success">
            Start
        </Button>
    </div>

}

const trainingCards = [
    {
        name:"Canine Good Citizen",
        mediaUrl:cgcImage,
        owner:"Sarama",
        route:"cgc"
    },
    {
        name: "down",
        mediaUrl: down,
        owner: "Sarama"
    },

    {
        name: "recall",
        mediaUrl: recall,
        owner: "Sarama"
    },
    {
        name: "sit",
        mediaUrl: sit,
        owner: "Sarama"
    },
    {
        name: "touch",
        mediaUrl: touch,
        owner: "Sarama"
    },
    {
        name: "stand",
        mediaUrl: stand,
        owner: "Sarama"
    },
    {
        name: "stay",
        mediaUrl: wait,
        owner: "Sarama"
    },

]


const TrainingManagement = () => {

    return <div className={"training-management"}>
        {
            trainingCards.map(({name, mediaUrl, owner,route}) => <TrainingCard key={name} className={"training-management__card"}
                                                                         owner={owner} name={name} route={route || name}
                                                                         mediaUrl={mediaUrl}/>)
        }

    </div>
}


export default TrainingManagement
