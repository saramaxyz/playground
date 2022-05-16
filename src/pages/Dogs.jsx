import React from "react"
import Sidebar from "../components/Sidebar";
import DogManagement from "../components/DogManagement";

export default () => {
    return <div style={{
        display: 'flex',
        flexDirection: 'row',
        width:"100vw",
        height:"100vh",
    }}>
        <Sidebar/>
        <DogManagement/>
    </div>
}

