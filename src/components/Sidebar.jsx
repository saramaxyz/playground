import React, {useEffect} from "react"
import {Link, useLocation, useNavigate} from 'react-router-dom';
import {connect} from "react-redux";
import image from "../assets/unnamed.png"

const Sidebar = ({auth}) => {

    const location = useLocation()
    const navigate = useNavigate()

    useEffect(() => {

        if (auth === null) {
            navigate("/")
        }
    })

    const {imageUrl, givenName, familyName} = auth
    return <navbar style={{
        display: 'flex',
        minWidth: "16rem",
        width: "10rem",
        height: "100vh",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "#A9C3B8"

    }}>
        <img style={{
            marginTop:"3rem",
            borderRadius: "4rem",
        }}
             // src={imageUrl}
             src={image}
             height={"128px"} width={"128px"}/>
        <h3>{givenName} {familyName}</h3>
        <div style={{
            width:"100%",
            paddingLeft:"4rem",
            display: "flex",
            flexDirection:"column",
            justifyContent:"flex-start"
        }}>
            <Link to={"/dogs"}>Dogs</Link>
            <Link to={"/training"}>Training</Link>
            <Link to={"/history"}>History</Link>
        </div>


    </navbar>
}

const mapStateToProps = ({auth}) => ({
    auth
})

export default connect(mapStateToProps)(Sidebar)

