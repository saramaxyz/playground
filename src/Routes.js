import React from "react"
import {Routes, Route} from "react-router-dom"
import Login from "./pages/Login";
import Dogs from "./pages/Dogs";
import Training from "./pages/Training";
import History from "./pages/History";
import DogForm from "./pages/DogForm";
import TrainingUpload from "./pages/TrainingUpload";
import Action from "./pages/Action";
import DogImages from "./pages/DogImages"
import CreateAction from "./pages/CreateAction";
import Barrier from "./components/Barrier";




export default () => (<Routes>
    <Route exact path={"/"} element={<Login/>}/>
    <Route exact path={"/dogs"} element={<Barrier><Dogs/></Barrier>}/>
    <Route exact path={"/dogs/:dogName"} element={<Barrier><DogImages/></Barrier>}/>
    <Route exact path={"/training"} element={<Barrier><Training/></Barrier>}/>
    <Route exact path={"/history"} element={<Barrier><History/></Barrier>}/>
    <Route exact path={"/insertDog"} element={<Barrier><DogForm/></Barrier>}/>
    <Route exact path={"/createAction"} element={<Barrier><CreateAction/></Barrier>}/>
    <Route exact path={"/training/:action"} element={<Barrier><TrainingUpload/></Barrier>}/>
    <Route exact path={"/history/:videoId"} element={<Barrier><Action/></Barrier>}/>
</Routes>)
