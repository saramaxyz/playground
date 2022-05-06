import React, {useEffect, useMemo, useState} from 'react';
import {useDropzone} from 'react-dropzone';
import {connect} from "react-redux";
import {Button} from "@mui/material";
import {useParams} from "react-router-dom";

const testId = "111224536715192972069"

const baseStyle = {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent:"center",
    height:"12rem",
    width:"12rem",
    borderWidth: 2,
    borderRadius: 2,
    borderColor: '#eeeeee',
    borderStyle: 'dashed',
    backgroundColor: '#fafafa',
    color: '#bdbdbd',
    outline: 'none',
    transition: 'border .24s ease-in-out',
    cursor:"pointer"
};

const focusedStyle = {
    borderColor: '#2196f3'
};

const acceptStyle = {
    borderColor: '#00e676'
};

const rejectStyle = {
    borderColor: '#ff1744'
};

const thumbsContainer = {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 16
};

const thumb = {
    display: 'inline-flex',
    borderRadius: 2,
    border: '1px solid #eaeaea',
    marginBottom: 8,
    marginRight: 8,
    width: 100,
    height: 100,
    padding: 4,
    boxSizing: 'border-box'
};

const thumbInner = {
    display: 'flex',
    minWidth: 0,
    overflow: 'hidden'
};

function VideoUpload({auth}) {

    const [file,setFile] = useState([])
    const {googleId} = auth
    const {action} = useParams()

    const {
        getRootProps,
        getInputProps,
        isFocused,
        isDragAccept,
        isDragReject
    } = useDropzone({
        multiple:false,
        accept: {'video/*': []},
        onDrop:(acceptedFiles) => {
            setFile(acceptedFiles)
        }
    });

    const style = useMemo(() => ({
        ...baseStyle,
        ...(isFocused ? focusedStyle : {}),
        ...(isDragAccept ? acceptStyle : {}),
        ...(isDragReject ? rejectStyle : {})
    }), [
        isFocused,
        isDragAccept,
        isDragReject
    ]);


    const thumbs = file.map(file => (
        <div style={thumb} key={file.name}>
            <div style={thumbInner}>
                <p>{file.name}</p>
            </div>
        </div>
    ));

    const uploadVideo = (event) => {
        event.preventDefault();
        const formData = new FormData()
        formData.append("user_id",googleId)
        formData.append("file",file[0])

        // TODO: Update URL
        fetch(`http://localhost:8000/api/actions/${action}`,{
            method:"POST",
            mode:"cors",
            body:formData
        })
    }

    return (
        <div style={{
            display: 'flex',
            flexDirection:"column",
            height:"100%",
            flexGrow:"1",
            justifyContent:"center",
            alignItems:"center"
        }}
             className="container">
            <div {...getRootProps({style})}>
                <input {...getInputProps()} />
                Upload video
            </div>
            <aside style={thumbsContainer}>
                {thumbs}
            </aside>
            <Button onClick={uploadVideo} variant="contained" color="success">
                Upload
            </Button>
        </div>
    );
}

const mapStateToProps = ({auth}) => ({auth})

export default connect(mapStateToProps)(VideoUpload)
