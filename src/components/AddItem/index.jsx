import React from "react"
import "./style.scss"

const AddItem = ({className="",onClick = null}) => {

    return <div className={"add-item " + className}
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
