import React from "react"
import {connect} from "react-redux";
import CourseHero from "./CourseHero";
import Sidebar from "../../components/Sidebar";
import GridContainer from "../../components/GridContainer";


const CoursePage = ({sections,title,description,shortDescription,courseId}) => {
    return <div style={{
        display: 'flex',
        flexDirection: 'row',
        width:"100vw",
        height:"100vh"

    }}>
        <Sidebar/>
        <GridContainer>
            <CourseHero title={title} shortDescription={shortDescription} courseId={courseId}/>

        </GridContainer>
    </div>

}



export default connect()(CoursePage)
