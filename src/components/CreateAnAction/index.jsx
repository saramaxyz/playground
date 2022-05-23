import React, {useState} from "react"
import "./style.scss"
import {
    Button,
    Fab,
    NativeSelect,
    Slider, Snackbar, TableBody,
    TableCell,
    TableHead,
    TableRow, TextField
} from "@material-ui/core";
import {Add} from "@mui/icons-material";
import {AutoSizer, Column, List, Table} from "react-virtualized";
import useWindowSize from "../../hooks/useWindowSize";
import {Alert} from "@mui/material";
import {Delete} from "@material-ui/icons";

const actionNames = [
    "Approach",
    "Touch"
]


const CreateAnAction = () => {

    const [actionName, setActionName] = useState("")
    const [actions, setActions] = useState([])
    const [open,setOpen] = useState(false)

    const addAction = () => {

        if(actions.length === 5){
            setOpen(true)

        }else {
            setActions([...actions, {
                name: actionNames[0],
                duration: 3
            }])
        }

    }

    const deleteAction = (index) => {
        const updatedActions = actions.filter((_,arrIndex) => arrIndex !== index)
        setActions(updatedActions)
    }
    const updateAction = (name, duration, index) => {

        const updatedActions = actions.map((val, arrIndex) => {
            if (index !== arrIndex) return val
            else return Object.assign({}, val, {name, duration})
        })
        setActions(updatedActions)
    }

    const handleClose = () => {
        setOpen(false)
    }

    return <div className="create-an-action">
            <TableHead>
                <TableRow>

                    <TableCell>
                        <Fab onClick={addAction}>
                            <Add/>
                        </Fab>
                    </TableCell>
                    <TableCell>
                        <TextField value={actionName} onChange={({target:{value}}) => setActionName(value)} placeholder={"Name"} variant="filled" />
                    </TableCell>
                    <TableCell>
                        <Button variant={"outlined"}>
                            Save
                        </Button>
                    </TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {
                    actions.map(({name, duration}, index) => (<TableRow key={index}><TableCell>
                            <NativeSelect
                                value={name}
                                label="Action"
                                onChange={({target: {value}}) => updateAction(value, duration, index)}
                            >
                                {
                                    actionNames.map((name) => <option value={name}>{name}</option>)
                                }
                            </NativeSelect>
                        </TableCell>
                            <TableCell>
                                <div>
                                    <p>{parseInt(duration/10)} seconds</p>

                                    <Slider
                                        marks={[
                                            {value: 1, label: "1s"},
                                            {value: 100, label: "10s"}
                                        ]}
                                        step={10}
                                        aria-label="Duration"
                                        value={duration}
                                        onChange={(_, newValue) => updateAction(name, newValue, index)}/>
                                </div>
                            </TableCell>
                            <TableCell>
                                <Fab onClick={() => deleteAction( index)} variant={"contained"} color={"secondary"}><Delete/></Fab>
                            </TableCell>
                    </TableRow>
                    ))
                }
            </TableBody>
        <Snackbar
            open={open}
            autoHideDuration={6000}
            onClose={handleClose}

        >
            <Alert  severity="info" onClose={handleClose} sx={{ width: '100%' }}>
                You cannot add more than 5 actions!
            </Alert>
        </Snackbar>

    </div>
}

export default CreateAnAction
