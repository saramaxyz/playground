import React from "react"
import Sidebar from "../../components/Sidebar";
import GridContainer from "../../components/GridContainer";
import DogCrud from "./DogCrud";
import AppBoilerplate from "../../components/AppBoilerplate";

export default () => {

    return <AppBoilerplate>
        <DogCrud/>
    </AppBoilerplate>
}


