import React from "react"
import Sidebar from "../../components/Sidebar";
import VideoUpload from "./VideoUpload";
import NavHeader from "../../components/NavHeader";

const TrainingUpload =  () => {

    return <div style={{
        display: 'flex',
        flexDirection: 'column',
        minWidth: "100vw",
        minHeight: "100vh",
    }}>
        <NavHeader/>
        <VideoUpload/>
    </div>
}


export default TrainingUpload
