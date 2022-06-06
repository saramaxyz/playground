import React from "react"
import "./style.scss"
import Sidebar from "../../components/Sidebar";
import GridContainer from "../../components/GridContainer";
import CourseManagement from "./CourseManagement";
import NavHeader from "../../components/NavHeader";


export default () => {
    return <div style={{
        display: 'flex',
        flexDirection: 'column',
        minWidth: "100vw",
        minHeight: "100vh",
    }}>
        <NavHeader/>
        <GridContainer>
            <CourseManagement/>

        </GridContainer>
    </div>
}


