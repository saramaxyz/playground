import React from "react"
import {Provider} from "react-redux"
import {BrowserRouter} from "react-router-dom";
import getStore from "./getStore"
import {PersistGate} from 'redux-persist/integration/react'

let Router = BrowserRouter

const {store,persistor} = getStore()

export default ({children}) => (
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>

            <Router>
                {children}
            </Router>
        </PersistGate>
    </Provider>
)
