import React, {useState} from "react"
import Sidebar from "../components/Sidebar";
import {Button, TextField} from "@mui/material";
import StyledDropzone from "../components/StyledDropzone";
import {connect} from "react-redux";
import {useNavigate} from "react-router";



const DogForm = ({auth}) => {


    const navigate = useNavigate()
    const {googleId} = auth
    const [age, setAge] = useState(null);
    const [name, setName] = useState("")
    const [breed, setBreed] = useState("")
    const [files, setFiles] = useState([]);
    const [uploading,setUploading] = useState(false)

    const updateAge = ({target: {value}}) => {
        setAge(value.replace(/\D/g, ''))
    }



    const uploadData = async () => {

        setUploading(true)
        for (const item of files) {
            const formData = new FormData();
            formData.append("name", name)
            formData.append("file",item)
            formData.append("user_id",googleId)
            // TODO: Update URL.
            await fetch("http://54.151.86.65/api/dogs/insert", {
                method: 'POST',
                body: formData,
                mode:"cors"
            })
        }
        setUploading(false)

        navigate("/dogs")

    }

    return <div style={{
        display: 'flex',
        flexDirection: 'row',
        width: "100vw",
        height: "100vh",
    }}>
        <Sidebar/>

        <form style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: "center",
            width: "inherit",
            justifyContent: "space-evenly"
        }}>
            <div>
                <StyledDropzone onDrop={setFiles}>
                    <p>Upload images</p>
                </StyledDropzone>
            </div>
            <div>
                <TextField value={name} onChange={({target: {value}}) => setName(value)} id="standard-basic"
                           label="Name" variant="standard"/>
                <TextField value={age} onChange={updateAge} id="standard-basic" label="Age" variant="standard"/>
            </div>
            <div>
                <TextField value={breed} onChange={({target: {value}}) => setBreed(value)} id="standard-basic"
                           label="Breed" variant="standard"/>
            </div>
            <div style={{
                display: "flex",
                justifyContent: "center"
            }}>
                <Button onClick={uploadData} variant="contained" color="success">
                    Add
                </Button>
            </div>
        </form>
    </div>
}

const mapStateToProps = ({auth}) => ({auth})
export default connect(mapStateToProps)(DogForm)
