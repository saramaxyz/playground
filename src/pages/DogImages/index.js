import React from "react"
import Sidebar from "../../components/Sidebar";
import GridContainer from "../../components/GridContainer";
import DogCrud from "../../components/DogCrud";

export default () => {

    return <div style={{
        display: 'flex',
        flexDirection: 'row',
        minWidth: "100vw",
        minHeight: "100vh",
    }}>
        <Sidebar/>
        <GridContainer>
            <DogCrud/>
        </GridContainer>
    </div>
}


