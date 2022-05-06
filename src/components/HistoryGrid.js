import React, {useEffect, useState} from "react"
import {connect} from "react-redux";

const TouchDetected = ({touchDetected})  => {
    if(touchDetected){
        return <p style={{color:"green"}}>Success</p>
    }else{
        return <p style={{color:"red"}}>Failed</p>
    }

}

const HistoryCard = ({dogs,touchDetected,videoId,action}) => {


    return <div style={{
        display: 'flex',
        justifyContent:"flex-start",
        flexDirection: 'column',
        alignItems: 'center',
    }}
        onClick={() => {
            // TODO: Update URL
            fetch("http://localhost:8000/api/results/video",{
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                mode:"cors",
                body:JSON.stringify({
                    video_id:videoId
                })
            })
                .then(resp => resp.json())
                .then(({video_url}) => {
                    window.open(video_url,"_blank").focus()
                })
        }}
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
        // TODO: Update URL
        fetch("http://localhost:8000/api/results/fetch",{
            method: "POST",
            mode:"cors",
            body:JSON.stringify({
                user_id:googleId
            }),
            headers:{
                "Content-Type": "application/json"
            }
        })
            .then(resp => resp.json())
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
            }) => <div style={{margin:"2rem"}}>
                <HistoryCard action={action} dogs={dogs} videoId={videoId} touchDetected={touchDetected}/>
                </div>
            )
        }
    </div>
}

const mapStateToProps = ({auth}) => ({auth})

export default connect(mapStateToProps)(HistoryGrid)
