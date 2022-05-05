import React from "react"
import {Provider} from "react-redux"
import {BrowserRouter} from "react-router-dom";
import getStore from "./getStore"

let Router = BrowserRouter


export default ({children}) => (
    <Provider store={getStore()}>
        <Router>
            {children}
        </Router>
    </Provider>
)
