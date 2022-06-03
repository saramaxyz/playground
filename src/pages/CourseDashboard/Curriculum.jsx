import React from "react"
import "./style.scss"
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import MessageIcon from '@mui/icons-material/Message';
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
import {Accordion, AccordionSummary} from "@material-ui/core";
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const sections = [
    {
        name: "Test 1. Accepting a Stranger",
        contents: [
            {
                type: "video",
                name: "How to treat puppy?"
            },
            {
                type: "feedback",
                name: "Treating exercise"
            },
            {
                type: "auto",
                name: "Sit exercise"
            },
        ]
    }
]


const SectionElement = ({type, name}) => {

    let Icon
    if (type === "video") {
        Icon = PlayArrowIcon
    } else if (type === "feedback") {
        Icon = MessageIcon
    } else if (type === "auto") {
        Icon = AutoFixHighIcon
    }

    return <div className={"curriculum__section"}>
        <Icon/>
        <p>{name}</p>
    </div>
}

const ContentsMenu = ({contents}) => {
    return <div>
        {
            contents.map(({name, type}) => <SectionElement name={name} type={type}/>)
        }
    </div>
}

const SectionsMenu = ({sections}) => {
    return <div>
        {sections.map(({name, contents}) => {
            return <Accordion key={name}>
                <AccordionSummary>
                    <Typography>{name}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <ContentsMenu contents={contents}/>
                </AccordionDetails>
            </Accordion>
            //return
        })}
    </div>

}

const Curriculum = () => {


    return <div className={"curriculum"}>
        <h2>Course Content</h2>
        <SectionsMenu sections={sections}/>
    </div>
}

export default Curriculum
