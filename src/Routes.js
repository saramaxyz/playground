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


// export default () => (<Routes>
//     {/*<Route exact path={"/"} element={<Login/>}/>*/}
//     <Route exact path={"/dogs"} element={<Dogs/>}/>
//     <Route exact path={"/dogs/:dogName"} element={<DogImages/>}/>
//     <Route exact path={"/training"} element={<Training/>}/>
//     <Route exact path={"/history"} element={<History/>}/>
//     <Route exact path={"/history/:videoId"} element={<Action/>}/>
//     <Route exact path={"/insertDog"} element={<DogForm/>}/>
//     <Route exact path={"/createAction"} element={<CreateAction/>}/>
//     <Route exact path={"/training/cgc"} element={<CgcPage/>}/>
//     <Route exact path={"/training/:action"} element={<TrainingUpload/>}/>
//     {/*<Route exact path={"/courses"} element={<Barrier><CourseGrid/></Barrier>}/>*/}
//     {/*<Route exact path={"/courses/:courseId"} element={<Barrier><CoursePage/></Barrier>}/>*/}
//     <Route exact path={"/"} element={<Records/>}/>
//
// </Routes>)

export default () => (<Routes>
    <Route exact path={"/"} element={<Login/>}/>
    <Route exact path={"/dogs"} element={<Barrier><Dogs/></Barrier>}/>
    <Route exact path={"/dogs/:dogName"} element={<Barrier><DogImages/></Barrier>}/>
    <Route exact path={"/training"} element={<Barrier><Training/></Barrier>}/>
    <Route exact path={"/history"} element={<Barrier><History/></Barrier>}/>
    <Route exact path={"/history/:videoId"} element={<Barrier><Action/></Barrier>}/>
    <Route exact path={"/insertDog"} element={<Barrier><DogForm/></Barrier>}/>
    <Route exact path={"/createAction"} element={<Barrier><CreateAction/></Barrier>}/>
    <Route exact path={"/training/cgc"} element={<Barrier><CgcPage/></Barrier>}/>
    <Route exact path={"/training/:action"} element={<Barrier><TrainingUpload/></Barrier>}/>
    {/*<Route exact path={"/courses"} element={<Barrier><CourseGrid/></Barrier>}/>*/}
    {/*<Route exact path={"/courses/:courseId"} element={<Barrier><CoursePage/></Barrier>}/>*/}
    <Route exact path={"/barks"} element={<Barrier><Records/></Barrier>}/>
    <Route exact path={"/home/teaching"} element={<Barrier><CourseList/></Barrier>}/>
    <Route exact path={"/home/teaching/:courseId"} element={<Barrier><CourseDashboard/></Barrier>}/>

</Routes>)
