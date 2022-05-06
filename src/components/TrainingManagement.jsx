import React, {useEffect, useState} from "react"
import {connect} from "react-redux";
import {useNavigate} from "react-router";
import down from "../assets/down.png"
import sit from "../assets/sit.png"
import recall from "../assets/recall.svg"
import fetch from "../assets/fetch.png"
import touch from "../assets/touch.png"
import wait from "../assets/wait.svg"

const TrainingCard = ({name,mediaUrl}) => {

    const navigate = useNavigate()

    return <div
        onClick={ () => navigate(`/training/${name}`)}
        style={{
        display: 'flex',
        justifyContent:"flex-start",
        flexDirection: 'column',
        cursor:"pointer",
        margin:"2rem",

    }}>
        <img style={{
            backgroundColor:"white",
            height:"8rem",
            width:"8rem"
        }} src={mediaUrl} />
        <p style={{padding:"0",marginTop:"1rem"}}>{name}</p>
    </div>

}

const trainingCards = [
    {
        name:"down",
        mediaUrl:down
    },
    {
        name:"fetch",
        mediaUrl:fetch
    },
    {
        name:"recall",
        mediaUrl:recall
    },
    {
        name:"sit",
        mediaUrl:sit
    },
    {
        name:"touch",
        mediaUrl:touch
    },
    {
        name:"wait",
        mediaUrl:wait
    }
]


const TrainingManagement = ({auth}) => {

    const {googleId} = auth
    const navigate = useNavigate()

    // Call only googleId has changed.

    return <div style={{
        display:"flex",
        flexWrap:"wrap",
    }}>
        {
            trainingCards.map(({name,mediaUrl}) => <TrainingCard name={name} mediaUrl={mediaUrl}/>)
        }
    </div>
}

const mapStateToProps = ({auth}) => ({auth})

export default connect(mapStateToProps)(TrainingManagement)
