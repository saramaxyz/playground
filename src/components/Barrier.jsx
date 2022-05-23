import React, {useEffect} from "react"
import {useNavigate} from "react-router";
import {connect} from "react-redux";

const Barrier = ({auth, children}) => {

    const navigate = useNavigate()

    useEffect(() => {
        if (auth === null) {
            navigate("/")
        }
    }, [])

    return <>
        {children}
    </>
}

const mapStateToProps = ({auth}) => ({auth})

export default connect(mapStateToProps)(Barrier)
