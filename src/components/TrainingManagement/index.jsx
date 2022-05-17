import React from "react"
import {useNavigate} from "react-router";
import down from "../../assets/down.png"
import sit from "../../assets/sit.png"
import recall from "../../assets/recall.svg"
import fetch from "../../assets/fetch.png"
import touch from "../../assets/touch.png"
import wait from "../../assets/wait.svg"
import stand from "../../assets/stand.svg"
import "./style.scss"

const TrainingCard = ({className = "", name, mediaUrl, owner}) => {

    const navigate = useNavigate()

    return <div
        className={"training-card " + className}
        onClick={() => navigate(`/training/${name}`)}
    >
        <img className={"training-card__image"} src={mediaUrl}/>
        <p className={"training-card__title"}>{name}</p>
        <p className={"training-card__owner"}>{owner}</p>
    </div>

}

const trainingCards = [
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
    }
]


const TrainingManagement = () => {

    return <div className={"training-management"}>
        {
            trainingCards.map(({name, mediaUrl, owner}) => <TrainingCard className={"training-management__card"}
                                                                         owner={owner} name={name}
                                                                         mediaUrl={mediaUrl}/>)
        }
    </div>
}


export default TrainingManagement
