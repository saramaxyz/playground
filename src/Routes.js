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
import CgcPage from "./pages/CGC";
import CourseDashboard from "./pages/CourseDashboard";
import CourseList from "./pages/CourseList";
import CourseGrid from "./pages/CourseGrid"
import CoursePage from "./pages/CoursePage";
import Records from "./pages/Records"
import Cluster from "./pages/ClusterPage"
import AudioTable from "./pages/AudioTable"


export default () => (<Routes>
    <Route exact path={"/"} element={<Login/>}/>
    <Route exact path={"/dogs"} element={<Barrier><Dogs/></Barrier>}/>
    <Route exact path={"/dogs/:dogName"} element={<Barrier><DogImages/></Barrier>}/>
    <Route exact path={"/insertDog"} element={<Barrier><DogForm/></Barrier>}/>
    <Route exact path={"/barks"} element={<Barrier><Records/></Barrier>}/>
    <Route exact path={"/cluster"} element={<Barrier><Cluster/></Barrier>}/>
    <Route exact path={"/data"} element={<AudioTable/>}/>
</Routes>)

