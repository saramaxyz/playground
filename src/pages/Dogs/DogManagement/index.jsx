import React from "react"
import {connect} from "react-redux";
import {useNavigate} from "react-router";
import "./style.scss"
import {Fab} from "@material-ui/core";
import PageviewIcon from '@mui/icons-material/Pageview';
import Kai from "./Kai.jpg"
import Kash from "./Kash.png"

const DogCard = ({className="",name,mediaUrl}) => {

    const navigate = useNavigate()

    return <div className={"dog-card " + className} >
        <img className={"dog-card__image"}  src={mediaUrl} />
        <p className={"dog-card__title"}>{name}</p>
        <div className={"dog-card__buttons"}>
            <Fab onClick={() => navigate(`/${encodeURIComponent(name)}`)} color="primary" aria-label="view">
                <PageviewIcon />
            </Fab>
        </div>
    </div>

}


const DogManagement = () => {


    return <div className={"dog-management"}>
        <DogCard className={"dog-management__card"} key={"Kai"} name={"Kai"} mediaUrl={Kai}/>
        <DogCard className={"dog-management__card"} key={"Kash"} name={"Kash"} mediaUrl={Kash}/>
    </div>
}

const mapStateToProps = ({auth}) => ({auth})

export default connect(mapStateToProps)(DogManagement)
