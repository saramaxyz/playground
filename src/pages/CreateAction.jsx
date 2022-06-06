import React from "react"
import Sidebar from "../components/Sidebar";
import GridContainer from "../components/GridContainer";
import CreateAnAction from "../components/CreateAnAction";
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
            <CreateAnAction/>
        </GridContainer>
    </div>
}


