import React from "react"
import Sidebar from "../../components/Sidebar";
import GridContainer from "../../components/GridContainer";
import DogCrud from "../../components/DogCrud";
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
            <DogCrud/>
        </GridContainer>
    </div>
}


