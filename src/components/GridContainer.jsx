import React from "react"


const GridContainer = ({children}) => {

    return <div style={{
        overflowY: "scroll",
        width:"100%",
        height:"100%",
        flexGrow:1
    }}>
        {children}
    </div>
}

export default GridContainer
