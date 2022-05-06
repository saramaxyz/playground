import React, {useEffect, useState} from "react"
import {connect} from "react-redux";
import AddItem from "./AddItem";
import {useNavigate} from "react-router";




const DogCard = ({name,mediaUrl}) => {


    return <div style={{
        display: 'flex',
        justifyContent:"flex-start",
        flexDirection: 'column',
        alignItems: 'center'
    }}>
        <img style={{
            height:"8rem",
            width:"8rem"
        }} src={mediaUrl} />
        <p style={{padding:"0",marginTop:"1rem"}}>{name}</p>
    </div>

}


const DogManagement = ({auth}) => {

    const {googleId} = auth
    const navigate = useNavigate()
    const [dogs,setDogs] = useState([])

    // Call only googleId has changed.
    useEffect(() => {
        const formData = new FormData()
        formData.append("user_id",googleId)
        // TODO: Update URL.
        fetch("http://localhost:8000/api/dogs/all",{
            method:"POST",
            body:formData,
            mode:"cors"
        })
            .then(r => r.json())
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

    return <div style={{
        height:"100%",
        width:"100%",
        display:"flex",
        justifyContent:"start",
        alignItems:"start",
        flexWrap:"wrap",
    }}>
        <div style={{
            margin:"2rem"
        }}>
            <AddItem onClick={() => navigate("/insertDog")}/>
        </div>
        {
            dogs.map(({name,mediaUrl}) => <DogCard name={name} mediaUrl={mediaUrl}/>)
        }
    </div>
}

const mapStateToProps = ({auth}) => ({auth})

export default connect(mapStateToProps)(DogManagement)
