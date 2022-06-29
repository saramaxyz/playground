import React from "react"
import GridContainer from "../../components/GridContainer";
import NavHeader from "../../components/NavHeader";
import "./style.scss"

export default ({children}) => {

    return <div className={"app-boilerplate"}>
        <NavHeader/>
        <GridContainer>
            {children}
        </GridContainer>
    </div>
}
