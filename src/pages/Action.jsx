import React from "react"
import Sidebar from "../components/Sidebar";
import ActionDashboard from "../components/ActionDashboard";



export default () => {

    return <div style={{
        display: 'flex',
        flexDirection: 'row',
        width:"100vw",
        height:"100vh"

    }}>
        <Sidebar/>
        <ActionDashboard/>
    </div>
}


