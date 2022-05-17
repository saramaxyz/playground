import React from "react"
import Sidebar from "../components/Sidebar";
import DogManagement from "../components/DogManagement";

export default () => {
    return <div style={{
        display: 'flex',
        flexDirection: 'row',
        minWidth:"100vw",
        minHeight:"100vh",
    }}>
        <Sidebar/>
        <div style={{
            overflowY: "scroll",
            width:"100%"
        }}>
            <DogManagement/>
        </div>
    </div>
}


