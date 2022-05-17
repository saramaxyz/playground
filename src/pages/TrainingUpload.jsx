import React from "react"
import Sidebar from "../components/Sidebar";
import VideoUpload from "../components/VideoUpload";

const TrainingUpload =  () => {

    return <div style={{
        display: 'flex',
        flexDirection: 'row',
        width:"100vw",
        height:"100vh"

    }}>
        <Sidebar/>
        <VideoUpload/>
    </div>
}


export default TrainingUpload
