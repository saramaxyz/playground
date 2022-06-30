import React from "react"
import Sidebar from "../../components/Sidebar";
import HistoryGrid from "../../components/HistoryManagement";
import GridContainer from "../../components/GridContainer";
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

            <HistoryGrid/>
        </GridContainer>
    </div>
}


