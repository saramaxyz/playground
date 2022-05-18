import React from "react"
import Sidebar from "../components/Sidebar";
import TrainingManagement from "../components/TrainingManagement";
import GridContainer from "../components/GridContainer";



export default () => {
    return <div style={{
        display: 'flex',
        flexDirection: 'row',
        width:"100vw",
        height:"100vh"

    }}>
        <Sidebar/>
        <GridContainer>
            <TrainingManagement/>

        </GridContainer>
    </div>
}


