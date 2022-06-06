import React from "react"
import Sidebar from "../components/Sidebar";
import DogManagement from "../components/DogManagement";
import GridContainer from "../components/GridContainer";
import NavHeader from "../components/NavHeader";

export default () => {
    return <div style={{
        display: 'flex',
        flexDirection: 'column',
        minWidth: "100vw",
        minHeight: "100vh",
    }}>
        <NavHeader/>
        <GridContainer>

            <DogManagement/>
        </GridContainer>
    </div>
}


