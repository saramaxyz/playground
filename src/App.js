import React from "react"
import Routes from "./Routes"
import Root from "./Root"
import FetchUser from "./FetchUser";

const App = () => {

    return <Root>
        <FetchUser/>
        <Routes/>
    </Root>
};
export default App
