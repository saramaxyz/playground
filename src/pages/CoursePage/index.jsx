import React from "react"
import {connect} from "react-redux";
import CourseHero from "./CourseHero";
import Sidebar from "../../components/Sidebar";
import GridContainer from "../../components/GridContainer";
import NavHeader from "../../components/NavHeader";


const CoursePage = ({sections,title,description,shortDescription,courseId}) => {
    return <div style={{
        display: 'flex',
        flexDirection: 'column',
        minWidth: "100vw",
        minHeight: "100vh",
    }}>
        <NavHeader/>
        <GridContainer>
            <CourseHero title={title} shortDescription={shortDescription} courseId={courseId}/>

        </GridContainer>
    </div>

}



export default connect()(CoursePage)
