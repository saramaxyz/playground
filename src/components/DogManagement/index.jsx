import React, {useEffect, useState} from "react"
import {connect} from "react-redux";
import AddItem from "../AddItem";
import {useNavigate} from "react-router";
import getApi from "../../repositories/getApi";
import "./style.scss"



const DogCard = ({className="",name,mediaUrl}) => {


    return <div className={"dog-card " + className} >
        <img className={"dog-card__image"}  src={mediaUrl} />
        <p className={"dog-card__title"}>{name}</p>
    </div>

}


const DogManagement = ({auth}) => {

    const {googleId} = auth
    const navigate = useNavigate()
    const [dogs,setDogs] = useState([])

    // Call only googleId has changed.
    useEffect(() => {

            getApi()
                .fetchDogs(googleId)
            .then(obj => {
                const {dogs} = obj
                const queryResult = Object.entries(dogs).map(([name,images]) => {
                    if(images.length > 0){
                        return {
                            name,
                            mediaUrl:images[0].media_url
                        }
                    }else{
                        return {
                            name,
                            mediaUrl:null
                        }
                    }

                })
                setDogs(queryResult)
            })
    },[])

    return <div className={"dog-management"}>
        <AddItem className={"dog-management__card"} onClick={() => navigate("/insertDog")}/>
        {
            dogs.map(({name,mediaUrl}) => <DogCard className={"dog-management__card"} key={name} name={name} mediaUrl={mediaUrl}/>)
        }
    </div>
}

const mapStateToProps = ({auth}) => ({auth})

export default connect(mapStateToProps)(DogManagement)
