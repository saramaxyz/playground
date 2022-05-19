import React, {useState} from "react"
import "./style.scss"
import {Select, Table, TableCell, TableHead, TableRow} from "@material-ui/core";

const actions = [
    ""
]



const CreateAnAction = () => {

    const [actionName,setActionName] = useState("")
    const [actions,setActions] = useState([])

    const addAction = () => {

    }

    const deleteAction = () => {

    }


    return <div className="create-an-action">

        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell align="right">Duration</TableCell>
                </TableRow>
            </TableHead>
            {
                actions.map(({name,duration}) => {
                    return <TableRow>
                        <TableCell>

                        </TableCell>
                        <TableCell>

                        </TableCell>
                    </TableRow>
                })
            }
            <TableHead>
                <TableRow>
                    <TableCell>
                        <Select>

                        </Select>
                    </TableCell>
                </TableRow>
            </TableHead>
        </Table>
    </div>
}

export default CreateAnAction
