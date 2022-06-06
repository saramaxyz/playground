import React, {useEffect, useState} from "react"
import "./style.scss"
import img from "./img.png"
import {Link, useNavigate} from "react-router-dom";
import { Menu as MenuIcon } from '@mui/icons-material';
import {MenuItem, Menu} from "@material-ui/core";
import {logout} from "../../actions";
import {connect} from "react-redux";



const NavHeader = ({dispatchLogout}) => {

    const navigate = useNavigate()


    const [anchorEl, setAnchorEl] = React.useState(null);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const isOpen = !!anchorEl;


    return <header className={"nav-header"}>
        <div>
            <Link to={"/courses"}>Sarama</Link>
        </div>
        <div>
        </div>
        <div onClick={handleClick}>
            <MenuIcon   />
        </div>
        <Menu
            open={isOpen}
            anchorEl={anchorEl}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'left',
            }}
            transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
            }}
        >
            <MenuItem className={"nav-header__menu-item"} onClick={()=>navigate("/dogs")}>Dogs</MenuItem>
            <MenuItem className={"nav-header__menu-item"} onClick={()=>navigate("/courses")}>Courses</MenuItem>
            <MenuItem className={"nav-header__menu-item"} onClick={()=>navigate("/history")}>History</MenuItem>
            <MenuItem className={"nav-header__menu-item"} onClick={()=> {
                dispatchLogout()
                navigate("/")
            }} >Sign Out</MenuItem>
        </Menu>
    </header>
}

const mapStateToProps = ({auth}) => ({
    auth
})

const mapDispatchToProps = (dispatch) => ({
    dispatchLogout: () =>  dispatch(logout())
})

export default connect(mapStateToProps,mapDispatchToProps)(NavHeader)

