import React from "react"
import Sidebar from "../components/Sidebar";

export default () => {
    return <div style={{
        display: 'flex',
        flexDirection: 'column',
        width:"100vw",
        height:"100vh"

    }}>
        <Sidebar/>
    </div>
}


