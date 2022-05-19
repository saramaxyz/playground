import React, {useEffect} from "react"
import {Link, useLocation, useNavigate} from 'react-router-dom';
import {connect} from "react-redux";
// Professional Trainer by ProSymbols from NounProject.com
import image from "../../assets/icon.png"
import "./style.scss"
import {logout} from "../../actions";

const Sidebar = ({auth,dispatchLogout}) => {

    const navigate = useNavigate()

    useEffect(() => {

        if (auth === null) {
            navigate("/")
        }
    }, [])

    const {imageUrl, givenName, familyName} = auth
    return <section className={"sidebar"}>
        <img className={"sidebar__image"} src={image}/>
        <h3 className={"sidebar__h3"}>{givenName} {familyName}</h3>
        <div className={"sidebar__link-list"}>
            <Link className={"sidebar__link-list__element"} to={"/dogs"}>Dogs</Link>
            <Link className={"sidebar__link-list__element"} to={"/training"}>Training</Link>
            <Link className={"sidebar__link-list__element"} to={"/history"}>History</Link>
            <Link onClick={dispatchLogout} className={"sidebar__link-list__element"} to={"/"}>Sign Out</Link>
        </div>

    </section>
}

const mapStateToProps = ({auth}) => ({
    auth
})

const mapDispatchToProps = (dispatch) => ({
    dispatchLogout: () =>  dispatch(logout())
})

export default connect(mapStateToProps,mapDispatchToProps)(Sidebar)

