import React from "react"
import GridContainer from "../../components/GridContainer";
import NavHeader from "../../components/NavHeader"
export default () => {

    return <div style={{
        display: 'flex',
        flexDirection: 'column',
        minWidth: "100vw",
        minHeight: "100vh",
    }}>
        <NavHeader/>
        <GridContainer>
        </GridContainer>
    </div>
}


