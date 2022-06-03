import React from "react"
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import {Button} from "@material-ui/core";
import {useNavigate} from "react-router";
import {createCourse} from "../../actions";
import {connect} from "react-redux"

const Courses = ({googleId,dispatchCreateCourse}) => {


    const navigate = useNavigate()

    const handleClick = () => {
        const timestamp = Date.now().toString()
        navigate(`/home/teaching/${timestamp}`)
        dispatchCreateCourse({
            courseId:timestamp,
            userId:googleId
        })
    }

    return <div className={"courses"}>
        <div className={"courses__header"}>
            <div>
                <h2>Courses</h2>
            </div>
            <div>
                <Button onClick={handleClick} variant={"outlined"}>
                    New Course
                </Button>
            </div>
        </div>
        <Box sx={{width: '100%', bgcolor: 'background.paper'}}>
            <List>
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            <InboxIcon/>
                        </ListItemIcon>
                        <ListItemText primary="Inbox"/>
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            <DraftsIcon/>
                        </ListItemIcon>
                        <ListItemText primary="Drafts"/>
                    </ListItemButton>
                </ListItem>
            </List>
        </Box>
    </div>
}
const mapStateToProps = ({auth: {googleId}}) => ({googleId})
const mapDispatchToProps = (dispatch) => ({
    dispatchCreateCourse: (payload) => dispatch(createCourse(payload))
})


export default connect(mapStateToProps,mapDispatchToProps)(Courses)
