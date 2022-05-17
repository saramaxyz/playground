import React, {useEffect, useState} from "react"
import {connect} from "react-redux";
import getApi from "../repositories/getApi";
import {useNavigate} from "react-router";

const TouchDetected = ({touchDetected})  => {
    if(touchDetected){
        return <p style={{color:"green"}}>Success</p>
    }else{
        return <p style={{color:"red"}}>Failed</p>
    }

}

const HistoryCard = ({dogs,touchDetected,videoId,action}) => {

    const navigate = useNavigate()
    return <div style={{
        display: 'flex',
        justifyContent:"flex-start",
        flexDirection: 'column',
        alignItems: 'center',
    }}
        onClick={() => navigate(`../history/${videoId}`)}
    >
        <div style={{
            height:"8rem",
            width:"8rem",
            cursor:"pointer",
            backgroundColor:"black"
        }} />
        <p style={{margin:"1rem"}}>{action.toUpperCase()} <TouchDetected touchDetected={touchDetected}/></p>
        <p style={{margin:"1rem"}}>Dogs : {dogs}</p>

    </div>

}



const HistoryGrid = ({auth}) => {

    const {googleId} = auth

    const [trainingResults,setTrainingResults] = useState([])

    useEffect(() => {
            getApi()
                .fetchResults(googleId)
                .then((resp)=>{
                    const {results} = resp
                    const trainingResultsObj = results.map(({action,dogs,video_id}) => {
                        let dogNames = []
                        let touchDetected = false

                        dogs.forEach(dog => {
                            dogNames.push(dog.dog_name)
                            if(dog.touch_detected){
                                touchDetected=true
                            }
                        })

                        return {
                            action,
                            dogs:dogNames,
                            videoId:video_id,
                            touchDetected
                        }
                    })
                    setTrainingResults(trainingResultsObj)
                })
    },[])

    return <div style={{
        display:"flex",
        flexWrap:"wrap",

    }}>
        {
            trainingResults.map(({
                dogs,
                videoId,
                touchDetected,
                action
            }) => <div key={videoId} style={{margin:"2rem"}}>
                <HistoryCard  action={action} dogs={dogs} videoId={videoId} touchDetected={touchDetected}/>
                </div>
            )
        }
    </div>
}

const mapStateToProps = ({auth}) => ({auth})

export default connect(mapStateToProps)(HistoryGrid)
