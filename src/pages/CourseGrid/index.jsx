import React from "react"
import "./style.scss"
import Sidebar from "../../components/Sidebar";
import GridContainer from "../../components/GridContainer";
import CourseManagement from "./CourseManagement";


export default () => {
    return <div style={{
        display: 'flex',
        flexDirection: 'row',
        width:"100vw",
        height:"100vh"

    }}>
        <Sidebar/>
        <GridContainer>
            <CourseManagement/>

        </GridContainer>
    </div>
}


