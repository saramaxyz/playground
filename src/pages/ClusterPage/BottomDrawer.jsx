import {Divider, Drawer, Fab, Link, ListItem, SwipeableDrawer} from "@material-ui/core";
import Box from "@mui/material/Box";
import CloseIcon from "@mui/icons-material/Close";
import List from "@mui/material/List";
import React from "react";

/*

Object {
date: Date Fri Jun 17 2022 12:51:09 GMT+0300 (GMT+03:00),
 prefix: "115087737562134809990/Kai;🚨Intruder Alert;5cb5191dd7f39f381b065fa3c8deaf04;17 Jun 2022 13\uf03a01\uf03a09 -0700.wav",
 duration: Date Fri Jun 17 2022 13:11:09 GMT+0300 (GMT+03:00),
 url: "https://sarama-audio-files.s3.us-west-1.amazonaws.com/115087737562134809990/Kai;🚨Intruder Alert;5cb5191dd7f39f381b065fa3c8deaf04;17 Jun 2022 13\uf03a01\uf03a09 -0700.wav" }

 */


const BottomDrawer = ({open, setDrawer, item}) => {

    if (item === null)
        return null

    const {prefix = "", duration = 0, url = ""} = item || {}
    console.log(item)

    const fileName = prefix
    const activity = fileName.split(";")[1]
    const dog = fileName.split(";")[0]


    return <SwipeableDrawer
        anchor={"bottom"}
        open={open}
        onClose={() => setDrawer(false)}
        onOpen={() => setDrawer(true)}
    >
        <Box
            role="presentation"
        >
            <div style={{
                marginLeft: "1rem",
                marginTop: "1rem"
            }}>
                <Fab onClick={() => setDrawer(false)}>
                    <CloseIcon/>
                </Fab>
            </div>

            <List>
                <ListItem>
                    URL: <a href={url}>{url}</a>
                </ListItem>
                <ListItem>
                    Activity: {activity}
                </ListItem>
                <ListItem>
                    Dogs: {dog.toString()}
                </ListItem>
            </List>

            <Divider/>
            <List>

            </List>
        </Box>
    </SwipeableDrawer>
}

export default BottomDrawer
