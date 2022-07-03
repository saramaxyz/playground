import React, {useEffect, useState} from "react"
import {useParams} from "react-router-dom";
import {connect} from "react-redux";
import DogCrudRepository from "./repository"
import Card from "../../../components/Card";
import "./style.scss"
import DeleteIcon from "@mui/icons-material/Delete";
import {Fab} from "@material-ui/core";
import {useNavigate} from "react-router";

const DogCrud = ({googleId}) => {

    const {dogName} = useParams()
    const navigate = useNavigate()
    const repo = new DogCrudRepository()

    const [dogImages, setDogImages] = useState([])

    useEffect(() => {
        repo.getQueryResult(googleId, dogName).then((data )=>{
            console.log(data)
            setDogImages(data)
        })

    }, [])

    const deleteImage = (dogId) => {
        repo.deleteImage(googleId, dogId)
        const newDogImages = dogImages.filter(({id}) => id !== dogId)
        if(newDogImages.length === 0){
            navigate("../",{replace: true})
        }else{
            setDogImages(newDogImages)
        }
    }

    return <div className="dog-crud">

        {
            dogImages.map(({media_url, id}) => {
                return <Card className="dog-crud__card" key={id}>
                    <img className="" src={media_url}/>
                    <Fab variant="extended" onClick={() => deleteImage(id)} color="secondary"
                         aria-label="delete">
                        <DeleteIcon/>
                        Delete
                    </Fab>
                </Card>
            })
        }
    </div>
}

const mapStateToProps = ({auth: {googleId}}) => ({googleId})

export default connect(mapStateToProps)(DogCrud)
