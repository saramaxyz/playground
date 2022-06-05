import React, {useEffect} from "react"
import {connect} from "react-redux";
import CustomerRepository from "./repositories/CustomerRepository";
import {fetchUser} from "./actions";

const FetchUser = ({dispatchFetchUser,auth}) => {
    useEffect(() => {
        const repo = new CustomerRepository()
        const {googleId} = auth
        repo.getUser(googleId).then((user) => {
            dispatchFetchUser(googleId)
        })
    })

}


const mapStateToProps = ({auth}) => ({auth})
const mapDispatchToProps = (dispatch) => {
    return {
        dispatchFetchUser: (userId) => dispatch(fetchUser(userId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FetchUser)
