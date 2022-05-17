import React, {useEffect, useState} from "react"
import {useParams} from "react-router-dom";
import getApi from "../../repositories/getApi";
import "./style.scss"
/*

{
  "action": "stand",
  "user_id": "111224536715192972069",
  "date": "05/17/2022 11:29:50",
  "dogs": [
    {
      "dog_name": "Kash",
      "action_times": [],
      "action_detected": [],
      "action_frames": [],
      "action_duration": [],
      "total_action_duration_seconds": "0",
      "total_action_frames": "0",
      "initial_action_seconds": null,
      "initial_action_frames": null
    }
  ],
  "video_id": "20bce147fcc4c449",
  "public": false,
  "video": {
    "fps": "30",
    "width": "1920",
    "height": "1080",
    "frame_count": "150"
  }
}

 */

const ActionStats = ({
    date,
    status,
    dogs,
    action,
 }) => {
    return <div className="action-stats">
        <div className="action-stats__element">
            Date: {date}
        </div>
        <div>
            Dogs: {dogs.map(({dog_name}) => dog_name).join(", ")}
        </div>
        <div className="action-stats__element">Action: {action}</div>
        <div className="action-stats__element">Status: {status ? "Successful" : "Failed"}</div>

    </div>
}

const ActionDashboard = () => {

    const {videoId} = useParams()
    const [videoData,setVideoData] = useState({})
    const [videoUrl,setVideoUrl] = useState(null)

    useEffect(() => {
        getApi()
            .getVideoMetadata(videoId)
            .then(({video_url,results}) => {
                setVideoUrl(video_url)
                setVideoData(results[0])
            })

    },[])

    return <div className={"action-dashboard"}>
        <div className="action-dashboard__inner-container">
            <ActionStats
                action={videoData.action || null}
                date={videoData.date || null}
                dogs={videoData.dogs || []}
                public={videoData.public || false}
            />
            {
                (videoUrl === null) ? null :
                    <video className="action-video" controls >
                        <source src={videoUrl} type="video/mp4"/>
                    </video>
            }

        </div>
    </div>
}

export default ActionDashboard
