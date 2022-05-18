import React from "react"


const GridContainer = ({children}) => {

    return <div style={{
        overflowY: "scroll",
        width:"100%"
    }}>
        {children}
    </div>
}

export default GridContainer
