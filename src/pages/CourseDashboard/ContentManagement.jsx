import React from "react"
import Box from "@mui/material/Box";
import TabList from "@mui/lab/TabList";
import Tab from "@mui/material/Tab";
import TabPanel from "@mui/lab/TabPanel";
import CourseLandingPage from "./CourseLandingPage";
import Curriculum from "./Curriculum";
import Publish from "./Publish";
import TabContext from "@mui/lab/TabContext";


const ContentManagement = ({className = ""}) => {
    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return <div className={className}>
        <TabContext value={value}>
            <Box sx={{borderBottom: 1, borderColor: 'divider'}}>
                <TabList onChange={handleChange} aria-label="lab API tabs example">
                    <Tab label="Course Landing Page" value="1"/>
                    <Tab label="Curriculum" value="2"/>
                    <Tab label="Publish" value="3"/>
                </TabList>
            </Box>
            <TabPanel value="1"><CourseLandingPage/></TabPanel>
            <TabPanel value="2"><Curriculum/></TabPanel>
            <TabPanel value="3"><Publish/></TabPanel>
        </TabContext>
    </div>
}

export default ContentManagement
