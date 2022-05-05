import React from "react"
import {Routes, Route,Switch} from "react-router-dom"
import Login from "./pages/Login";
import Dogs from "./pages/Dogs";




export default () => (<Routes>
    <Route exact path={"/"} element={<Login/>}/>
    <Route exact path={"/dogs"} element={<Dogs/>}/>

</Routes>)
