import React, {useRef, useState} from "react"
import "./style.scss"
import {
    Button,
    Fab, Input,
    NativeSelect,
    Slider,
    TableCell,
    TableHead,
    TableRow
} from "@material-ui/core";
import {Add} from "@mui/icons-material";
import {AutoSizer, Column, List, Table} from "react-virtualized";
import useWindowSize from "../../hooks/useWindowSize";

const actionNames = [
    "Approach",
    "Touch"
]


const CreateAnAction = () => {

    const {width, height} = useWindowSize()
    const ref = useRef()
    const [actions, setActions] = useState([])

    const addAction = () => {
        setActions([...actions, {
            name: actionNames[0],
            duration: 3
        }])
    }

    const deleteAction = () => {

    }
    const updateAction = (name, duration, index) => {

        const updatedActions = actions.map((val, arrIndex) => {
            if (index !== arrIndex) return val
            else return Object.assign({}, val, {name, duration})
        })
        setActions(updatedActions)
    }

    const AddButton = () => {
        const [actionName, setActionName] = useState("")

        return <div style={{display:"flex"}}>
            <Input ref={ref} value={actionName} onChange={({target:{value}}) => setActionName(value)} placeholder="Name" inputProps="actionName" />
            <Fab onClick={addAction}>
                <Add/>
            </Fab>
            <Button variant={"contained"} >Save</Button>
        </div>

    }

    const rowRenderer = ({key,index,style}) => {


        if(index === 0){
            return <div key={key} style={style}>
                <AddButton/>
            </div>
        }else{
            const element = actions[index-1]
            const {name, duration} = element
            return <div key={key} style={style}>
                <NativeSelect
                    value={name}
                    label="Action"
                    onChange={({target: {value}}) => updateAction(value, duration, index-1)}
                >
                    {
                        actionNames.map((name) => <option value={name}>{name}</option>)
                    }
                </NativeSelect>
                <div>
                    <p>{duration} seconds</p>

                    <Slider
                        marks={[
                            {value: 0, label: "1s"},
                            {value: 100, label: "100s"}
                        ]}
                        aria-label="Duration"
                        value={duration}
                        onChange={(_, newValue) => updateAction(name, newValue, index-1)}/>
                </div>
            </div>
        }


    }

    return <div className="create-an-action">

        <AutoSizer>
            {
                ({
                     height, width
                 }) => (
                    <List
                        height={height}
                        width={width}
                        rowHeight={160}
                        rowRenderer={rowRenderer}
                        rowCount={actions.length + 1}
                    />
                )
            }

        </AutoSizer>

    </div>
}

export default CreateAnAction
