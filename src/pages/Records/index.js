import React from "react"
import Sidebar from "../../components/Sidebar";
import Calendar from "./Calendar";



export default () => {

    return <div style={{
        display: 'flex',
        flexDirection: 'row',
        width:"100vw",
        height:"100vh"

    }}>
        <Sidebar/>
        <Calendar/>
    </div>
}


