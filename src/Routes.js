import React from "react"
import {Routes, Route} from "react-router-dom"
import Login from "./pages/Login";
import Dogs from "./pages/Dogs";
import Barrier from "./components/Barrier";
import DogData from "./pages/DogData";


export default () => (<Routes>
    <Route exact path={"/"} element={<Dogs/>}/>
    <Route exact path={"/:dogName"} element={<DogData/>}/>
</Routes>)

