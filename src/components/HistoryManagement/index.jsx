import React, {useEffect, useState} from "react"
import {connect} from "react-redux";
import getApi from "../../repositories/getApi";
import {useNavigate} from "react-router";
import "./style.scss";
import {Button} from "@mui/material";

const ActionDetected = ({actionDetected})  => {
    if(actionDetected){
        return <h4 style={{color:"green"}}>Success</h4>
    }else{
        return <h4 style={{color:"red"}}>Failed</h4>
    }

}

const HistoryCard = ({className="",dogs,actionDetected,videoId,action}) => {

    const navigate = useNavigate()
    return <div className={"history-card "+ className}
    >
        <div  className="history-card__thumbnail" />
        <h4>{action.toUpperCase()}</h4>
        <ActionDetected className={""} actionDetected={actionDetected}/>
        <p>Dogs: {dogs.join(", ")}</p>
        <Button onClick={() => navigate(`../history/${videoId}`)} variant="contained" color="success">
            View
        </Button>
    </div>

}



const HistoryManagement = ({auth}) => {

    const {googleId} = auth

    const [trainingResults,setTrainingResults] = useState([])

    useEffect(() => {
            getApi()
                .fetchResults(googleId)
                .then((resp)=>{
                    const {results} = resp
                    const trainingResultsObj = results.map(({action,dogs,video_id}) => {
                        let dogNames = []
                        let action_detected = false

                        dogs.forEach(dog => {
                            dogNames.push(dog.dog_name)
                            if(dog.action_detected){
                                action_detected=true
                            }
                        })

                        return {
                            action,
                            dogs:dogNames,
                            videoId:video_id,
                            actionDetected:action_detected
                        }
                    })
                    setTrainingResults(trainingResultsObj)
                })
    },[])

    return <div className={"history-management"} >
        {
            trainingResults.map(({
                dogs,
                videoId,
                actionDetected,
                action
            }) => <HistoryCard key={videoId} className={"history-management__card"} action={action} dogs={dogs} videoId={videoId} actionDetected={actionDetected}/>
            )
        }
    </div>
}

const mapStateToProps = ({auth}) => ({auth})

export default connect(mapStateToProps)(HistoryManagement)
