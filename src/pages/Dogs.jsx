import React from "react"
import Sidebar from "../components/Sidebar";
import DogManagement from "../components/DogManagement";
import GridContainer from "../components/GridContainer";

export default () => {
    return <div style={{
        display: 'flex',
        flexDirection: 'row',
        minWidth: "100vw",
        minHeight: "100vh",
    }}>
        <Sidebar/>
        <GridContainer>

            <DogManagement/>
        </GridContainer>
    </div>
}


