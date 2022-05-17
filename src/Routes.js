import React from "react"
import {Routes, Route} from "react-router-dom"
import Login from "./pages/Login";
import Dogs from "./pages/Dogs";
import Training from "./pages/Training";
import History from "./pages/History";
import DogForm from "./pages/DogForm";
import TrainingUpload from "./pages/TrainingUpload";
import Action from "./pages/Action";




export default () => (<Routes>
    <Route exact path={"/"} element={<Login/>}/>
    <Route exact path={"/dogs"} element={<Dogs/>}/>
    <Route exact path={"/training"} element={<Training/>}/>
    <Route exact path={"/history"} element={<History/>}/>
    <Route exact path={"/insertDog"} element={<DogForm/>}/>
    <Route exact path={"/training/:action"} element={<TrainingUpload/>}/>
    <Route exact path={"/history/:videoId"} element={<Action/>}/>
</Routes>)
