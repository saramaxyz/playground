import React from "react"
import Sidebar from "../../components/Sidebar";
import GridContainer from "../../components/GridContainer";
import {useParams} from "react-router-dom";

export default () => {



    return <div style={{
        display: 'flex',
        flexDirection: 'row',
        minWidth: "100vw",
        minHeight: "100vh",
    }}>
        <Sidebar/>
        <GridContainer>

        </GridContainer>
    </div>
}


