import React, {useEffect, useState} from "react"
import "./style.scss"
import {Link, useLocation, useNavigate} from "react-router-dom";
import {Menu as MenuIcon} from '@mui/icons-material';
import {MenuItem, Menu, Breadcrumbs} from "@material-ui/core";
import {logout} from "../../actions";
import {connect} from "react-redux";
import {Link as MuiLink} from "@mui/material";

const Bread = () => {
    const {pathname} = useLocation();
    const paths = pathname.slice("/").split("/")
    const navigate = useNavigate()

    return <Breadcrumbs className={"bread"} separator=">" aria-label="breadcrumb" color={"white"}>
        {
            paths.map((value, index) => {
                const url = paths.slice(0,index+1).join("/")
                return <MuiLink key={url} className={"mui-link"} underline="hover" color="white" onClick={() => navigate(url)}>
                    {value}
                </MuiLink>
            })

        }

    </Breadcrumbs>
}


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
            <Link to={"/"}>Sarama</Link>
        </div>
        <div>
            <Bread/>

        </div>
        <div onClick={handleClick}>
            <MenuIcon/>
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
            <MenuItem className={"nav-header__menu-item"} onClick={() => navigate("/dogs")}>Dogs</MenuItem>
            <MenuItem className={"nav-header__menu-item"} onClick={() => navigate("/barks")}>Barks</MenuItem>
            <MenuItem className={"nav-header__menu-item"} onClick={() => navigate("/cluster")}>Cluster</MenuItem>
            <MenuItem className={"nav-header__menu-item"} onClick={() => navigate("/data")}>Data</MenuItem>
            <MenuItem className={"nav-header__menu-item"} onClick={() => {
                dispatchLogout()
                navigate("/")
            }}>Sign Out</MenuItem>
        </Menu>
    </header>
}

const mapStateToProps = ({auth}) => ({
    auth
})

const mapDispatchToProps = (dispatch) => ({
    dispatchLogout: () => dispatch(logout())
})

export default connect(mapStateToProps, mapDispatchToProps)(NavHeader)
