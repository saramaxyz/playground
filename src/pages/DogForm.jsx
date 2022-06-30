import React, {useState} from "react"
import Sidebar from "../components/Sidebar";
import {Button, TextField} from "@mui/material";
import StyledDropzone from "../components/StyledDropzone";
import {connect} from "react-redux";
import {useNavigate} from "react-router";
import getApi from "../repositories/getApi";
import {CircularProgress} from "@material-ui/core";
import NavHeader from "../components/NavHeader";



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

            await getApi()
                .insertDog(name,item,googleId)
        }
        setUploading(false)
        navigate("/dogs")

    }

    return <div style={{
        display: 'flex',
        flexDirection: 'column',
        minWidth: "100vw",
        minHeight: "100vh",
    }}>
        <NavHeader/>

        <form style={{
            width:"100%",
            display: 'flex',
            flexDirection: 'column',
            alignItems: "center",
            justifyContent: "space-evenly"
        }}>
            <div>
                <StyledDropzone onDrop={setFiles}>
                    <p>Upload images</p>
                </StyledDropzone>
                <p style={{textAlign: 'center'}}>{(files.length === 0) ? "No file is attached." : `${files.length} file will be uploaded.`}</p>
            </div>
            <div>
                <TextField style={{width:"100%"}} value={name}  onChange={({target: {value}}) => setName(value)} id="standard-basic"
                           label="Name" variant="standard"/>
            </div>

            <div style={{
                display: "flex",
                justifyContent: "center"
            }}>
                {
                    (uploading) ?
                    <CircularProgress/>
                    :
                    <Button onClick={uploadData} variant="contained" color="success">
                    Add
                    </Button>
                }

            </div>
        </form>
    </div>
}

const mapStateToProps = ({auth}) => ({auth})
export default connect(mapStateToProps)(DogForm)
