import React from "react"

const AddItem = ({onClick = null}) => {

    return <div style={{
        display: 'flex',
        justifyContent:"center",
        alignItems: "center",
        height:"8rem",
        width:"8rem",
        cursor: "pointer",
        border:"3px dashed black",
        fontSize:"4rem"
    }}
    onClick={onClick}
    >
    <div style={{
        verticalAlign: "middle",
        transform: "translate(0,-.5rem)",
        userSelect:"none"
    }}>+</div>
    </div>
}

export default AddItem
