import React from "react"
import Sidebar from "../components/Sidebar";
import HistoryGrid from "../components/HistoryGrid";

export default () => {

    return <div style={{
        display: 'flex',
        flexDirection: 'row',
        width:"100vw",
        height:"100vh"

    }}>
        <Sidebar/>
        <HistoryGrid/>
    </div>
}


