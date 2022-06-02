import React, {useState} from "react"
import "./style.scss"
import {Button, TextField} from "@mui/material";
import RichTextEditor from "../../components/RichTextEditor";


const CourseLandingPage = ({text,shortDescription,description}) => {
    const [textValue,setTextValue] = useState(text)
    const [descriptionValue,setDescriptionValue] = useState(description)
    const [shortDescriptionValue,setShortDescriptionValue] = useState(shortDescription)

    const updateValue = (effect) => ({target:{value}}) =>  effect(value)

    return <div className={"course-landing-page"}>
        <div className={"course-landing-page__top-button"}>
            <Button style={{backgroundColor:"#5cdb5c"}} value={"Save"} variant={"success"} >
                Save
            </Button>
        </div>
        <div>
            <TextField fullWidth onChange={updateValue(setTextValue)} value={text} id="outlined-basic" label="Course title" variant="outlined" />

        </div>
        <div>
            <TextField
                variant="outlined"
                label="Course subtitle"
                fullWidth
                onChange={updateValue(setShortDescriptionValue)}
                style={{textAlign: 'left'}}
                multiline
                value={shortDescriptionValue}
            />
        </div>
        <div>
            <RichTextEditor className={"course-landing-page__rich-text-editor"} onChange={setDescriptionValue}/>

        </div>

    </div>
}

export default CourseLandingPage
