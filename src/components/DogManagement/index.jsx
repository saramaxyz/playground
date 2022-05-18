import React, {useEffect, useState} from "react"
import {connect} from "react-redux";
import AddItem from "../AddItem";
import {useNavigate} from "react-router";
import getApi from "../../repositories/getApi";
import "./style.scss"
import {Fab} from "@material-ui/core";
import DeleteIcon from '@mui/icons-material/Delete';
import PageviewIcon from '@mui/icons-material/Pageview';
import DogManagementRepository from "./repository";

const DogCard = ({className="",name,mediaUrl,googleId}) => {

    const repo = new DogManagementRepository()
    const navigate = useNavigate()

    return <div className={"dog-card " + className} >
        <img className={"dog-card__image"}  src={mediaUrl} />
        <p className={"dog-card__title"}>{name}</p>
        <div className={"dog-card__buttons"}>
            <Fab onClick={() => {navigate(encodeURIComponent(name),{state:{googleId}})}} color="primary" aria-label="view">
                <PageviewIcon />
            </Fab>
            <Fab onClick={() => repo.purgeDog(googleId,name)} color="secondary" aria-label="delete">
                <DeleteIcon />
            </Fab>
        </div>
    </div>

}


const DogManagement = ({auth}) => {

    const {googleId} = auth
    const navigate = useNavigate()
    const [dogs,setDogs] = useState([])
    const repo = new DogManagementRepository()

    // Call only googleId has changed.
    useEffect(() => {

        repo.getQueryResult(googleId).then(result => setDogs(result))
    },[])


    return <div className={"dog-management"}>
        <AddItem className={"dog-management__card"} onClick={() => navigate("/insertDog")}/>
        {
            dogs.map(({name,mediaUrl}) => <DogCard className={"dog-management__card"} googleId={googleId} key={name} name={name} mediaUrl={mediaUrl}/>)
        }
    </div>
}

const mapStateToProps = ({auth}) => ({auth})

export default connect(mapStateToProps)(DogManagement)
