import React from "react"
import "./style.scss";



const Card = ({onClick,className = "",children}) => {

    return <div onClick={onClick} className={"card " + className}>
        {children}
    </div>

}



export default Card
