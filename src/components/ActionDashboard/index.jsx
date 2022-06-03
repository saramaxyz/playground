import React, {useEffect, useState} from "react"
import {useParams} from "react-router-dom";
import getApi from "../../repositories/getApi";
import "./style.scss"
import Card from "../Card";

const ActionStats = ({
                         date,
                         status,
                         dogs,
                         action,
                     }) => {
    return <Card className="action-stats">
        <p className="action-stats__element">
            Date: {date}
        </p>
        {/*<p>*/}
        {/*    Dogs: {dogs.map(({dog_name}) => dog_name).join(", ")}*/}
        {/*</p>*/}
        <p className="action-stats__element">Action: {action}</p>
        <p className="action-stats__element">Status: {status ? "Successful" : "Failed"}</p>
    </Card>
}

const ActionDashboard = () => {

    const {videoId} = useParams()
    const [videoData, setVideoData] = useState({})
    const [videoUrl, setVideoUrl] = useState(null)

    useEffect(() => {
        getApi()
            .getVideoMetadata(videoId)
            .then((videoMetadata) => {
                let {video_url, results} = videoMetadata
                if(results.length >= 1) results = results[0]
                const {date, action, dogs, video_id} = results
                let dogNames = []
                let action_detected = false
                dogs.forEach(dog => {
                    dogNames.push(dog.dog_name)
                    if (dog.action_detected) {
                        action_detected = true
                    }
                })
                const videoData = {
                    action,
                    date,
                    dogs: dogNames,
                    videoId: video_id,
                    actionDetected: action_detected
                }
                setVideoUrl(video_url)
                setVideoData(videoData)
            })

    }, [])

    return <div className={"action-dashboard"}>
        <div className="action-dashboard__inner-container">
            <ActionStats
                action={videoData.action || null}
                date={videoData.date || null}
                dogs={videoData.dogs || []}
                status={videoData.actionDetected}
            />
            {
                (videoUrl === null) ? null :
                    <video className="action-video" controls>
                        <source src={videoUrl} type="video/mp4"/>
                    </video>
            }

        </div>
    </div>
}

export default ActionDashboard
