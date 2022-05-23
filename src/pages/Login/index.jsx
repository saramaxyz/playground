import React, {useEffect} from "react"
import GoogleLogin from 'react-google-login';
import {connect} from "react-redux";
import {login} from "../../actions";
import { useNavigate } from 'react-router-dom'
import "./style.scss"

// Don't forget to add domain.
const clientId = "640889680577-fiuhpeigen4fd5h4n5at9ht2v78lmmcr.apps.googleusercontent.com"
const clientSecret = "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"

const Index = ({dispatchLogin,auth}) => {

    const navigate = useNavigate()

    useEffect(() => {
       if(auth !== undefined && auth !== null){
           console.log(auth)
           navigate("/dogs")
       }
    },[])

    const updateUser = (authObject) => {
        const {googleId = null} = authObject
        const {familyName="",givenName="",email="",imageUrl=null} = authObject.profileObj
        dispatchLogin({
            familyName,
            givenName,
            email,
            imageUrl,
            googleId
        })
        navigate("/dogs")
    }

    return <div className="login-container">
        <h1 className="login-container__header1">
            Sarama Trainground
        </h1>
        <h2 className="login-container__header2">Start training your dog today</h2>
        <GoogleLogin
            clientId={clientId}
            buttonText="Login with Google"
            onSuccess={updateUser}
            onFailure={console.error}
            cookiePolicy={'single_host_origin'}
        />
    </div>
}

const mapDispatchToProps = (dispatch) => ({
    dispatchLogin: (authObj) => dispatch(login(authObj))
})

const mapStateToProps = ({auth}) => ({auth})


export default connect(mapStateToProps,mapDispatchToProps)(Index)
