import React from "react"
import Sidebar from "../components/Sidebar";
import ActionDashboard from "../components/ActionDashboard";
import NavHeader from "../components/NavHeader";



export default () => {

    return <div style={{
        display: 'flex',
        flexDirection: 'column',
        minWidth: "100vw",
        minHeight: "100vh",
    }}>
        <NavHeader/>
        <ActionDashboard/>
    </div>
}


