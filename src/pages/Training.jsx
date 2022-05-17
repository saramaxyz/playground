import React from "react"
import Sidebar from "../components/Sidebar";
import TrainingManagement from "../components/TrainingManagement";



export default () => {
    return <div style={{
        display: 'flex',
        flexDirection: 'row',
        width:"100vw",
        height:"100vh"

    }}>
        <Sidebar/>
        <div style={{
            overflowY:"scroll",
            width:"100%"
        }}>
            <TrainingManagement/>

        </div>
    </div>
}


