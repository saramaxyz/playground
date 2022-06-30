import React from "react"


const GridContainer = ({children}) => {

    return <div style={{
        overflowY: "scroll",
        width:"100%",
        display:"flex",
        flexDirection:"column",
        flexGrow:1
    }}>
            {children}

    </div>
}

export default GridContainer
