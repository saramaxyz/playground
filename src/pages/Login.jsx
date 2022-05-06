import React from "react"
import GoogleLogin from 'react-google-login';
import {connect} from "react-redux";
import {login} from "../actions";
import { useNavigate } from 'react-router-dom'
import auth from "../reducers/auth";



/*
{
  "Ba": "108755584604222751539",
  "xc": {
    "token_type": "Bearer",
    "access_token": "ya29.A0ARrdaM9Yyia86PjJg9ChX3EgK0z9D66xbh0kLV3RRh2Vt5A5fdUwdJOYkBs2vKuouX0eyBZCGyTYPAVSuIbi0chHtmpVGwKm13FDLsjafCHZwhjrPj082djESHOO5mjFgaMlVSamx41n29L3hqm6hxriAdej",
    "scope": "email profile openid https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/userinfo.email",
    "login_hint": "AJDLj6JUa8yxXrhHdWRHIV0S13cA3KU6MzpSzTv-E9D53ehnkWzqxjae7VYwCRjfdtZvGOOa3QD4jAq_vmUZeRfICBMMUiw2eg",
    "expires_in": 3599,
    "id_token": "eyJhbGciOiJSUzI1NiIsImtpZCI6ImZjYmQ3ZjQ4MWE4MjVkMTEzZTBkMDNkZDk0ZTYwYjY5ZmYxNjY1YTIiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJhY2NvdW50cy5nb29nbGUuY29tIiwiYXpwIjoiNjQwODg5NjgwNTc3LWZpdWhwZWlnZW40ZmQ1aDRuNWF0OWh0MnY3OGxtbWNyLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwiYXVkIjoiNjQwODg5NjgwNTc3LWZpdWhwZWlnZW40ZmQ1aDRuNWF0OWh0MnY3OGxtbWNyLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwic3ViIjoiMTA4NzU1NTg0NjA0MjIyNzUxNTM5IiwiaGQiOiJzYXJhbWEueHl6IiwiZW1haWwiOiJvZ3V6QHNhcmFtYS54eXoiLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiYXRfaGFzaCI6InJ6U1RuLWM5c1Y0ZlZ0RGc1RUg3dnciLCJuYW1lIjoiT8SfdXogVnVydcWfa2FuZXIiLCJwaWN0dXJlIjoiaHR0cHM6Ly9saDMuZ29vZ2xldXNlcmNvbnRlbnQuY29tL2EvQUFUWEFKelRKRzFYbGNpZ1B2ZnFQTmQ0SXFEVTFGckU3azhnQWtOQW1nTlc9czk2LWMiLCJnaXZlbl9uYW1lIjoiT8SfdXoiLCJmYW1pbHlfbmFtZSI6IlZ1cnXFn2thbmVyIiwibG9jYWxlIjoiZW4iLCJpYXQiOjE2NTE3NDQ1ODYsImV4cCI6MTY1MTc0ODE4NiwianRpIjoiNDE0MTNmMWI3MGRlMjM5ZWIwYjllZjFhNDM4MmM4MTZjZmRjYWU5ZCJ9.QqxqPBcVwmDM-riAUIDqReYjiyNJ1U430gPFUwM_lZZ0W_afWo3GdrbLashxJt4NnQMJDf0yrQoHYwgyekrT-QGgP-PHxcrfVy9uAhGjr6ixMGqlc2hSyNBB6m69WWDuChdg47_KxxPJ9JoRsv93oaxtgBmh1hM90alTKCc4d8GlWay0W7z9MSJ9l78v1bstiR-dMV0cdgXYAFxrojW8kO8YuvE8VRvxo4_yzXFAfDcLHNo0kzcQOGbDlwtJPc6KqyCGNTOkXeO9d47prIthCrk9pZXrPTTrkZdqXx1HC7mgKxBcFfQP0NHByITKprUnSRdPEMiFKKo3UTJtIng8wQ",
    "session_state": {
      "extraQueryParams": {
        "authuser": "1"
      }
    },
    "first_issued_at": 1651744587554,
    "expires_at": 1651748186554,
    "idpId": "google"
  },
  "Lu": {
    "TW": "108755584604222751539",
    "tf": "Oğuz Vuruşkaner",
    "iY": "Oğuz",
    "wW": "Vuruşkaner",
    "rN": "https://lh3.googleusercontent.com/a/AATXAJzTJG1XlcigPvfqPNd4IqDU1FrE7k8gAkNAmgNW=s96-c",
    "Bv": "oguz@sarama.xyz"
  },
  "googleId": "108755584604222751539",
  "tokenObj": {
    "token_type": "Bearer",
    "access_token": "ya29.A0ARrdaM9Yyia86PjJg9ChX3EgK0z9D66xbh0kLV3RRh2Vt5A5fdUwdJOYkBs2vKuouX0eyBZCGyTYPAVSuIbi0chHtmpVGwKm13FDLsjafCHZwhjrPj082djESHOO5mjFgaMlVSamx41n29L3hqm6hxriAdej",
    "scope": "email profile openid https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/userinfo.email",
    "login_hint": "AJDLj6JUa8yxXrhHdWRHIV0S13cA3KU6MzpSzTv-E9D53ehnkWzqxjae7VYwCRjfdtZvGOOa3QD4jAq_vmUZeRfICBMMUiw2eg",
    "expires_in": 3599,
    "id_token": "eyJhbGciOiJSUzI1NiIsImtpZCI6ImZjYmQ3ZjQ4MWE4MjVkMTEzZTBkMDNkZDk0ZTYwYjY5ZmYxNjY1YTIiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJhY2NvdW50cy5nb29nbGUuY29tIiwiYXpwIjoiNjQwODg5NjgwNTc3LWZpdWhwZWlnZW40ZmQ1aDRuNWF0OWh0MnY3OGxtbWNyLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwiYXVkIjoiNjQwODg5NjgwNTc3LWZpdWhwZWlnZW40ZmQ1aDRuNWF0OWh0MnY3OGxtbWNyLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwic3ViIjoiMTA4NzU1NTg0NjA0MjIyNzUxNTM5IiwiaGQiOiJzYXJhbWEueHl6IiwiZW1haWwiOiJvZ3V6QHNhcmFtYS54eXoiLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiYXRfaGFzaCI6InJ6U1RuLWM5c1Y0ZlZ0RGc1RUg3dnciLCJuYW1lIjoiT8SfdXogVnVydcWfa2FuZXIiLCJwaWN0dXJlIjoiaHR0cHM6Ly9saDMuZ29vZ2xldXNlcmNvbnRlbnQuY29tL2EvQUFUWEFKelRKRzFYbGNpZ1B2ZnFQTmQ0SXFEVTFGckU3azhnQWtOQW1nTlc9czk2LWMiLCJnaXZlbl9uYW1lIjoiT8SfdXoiLCJmYW1pbHlfbmFtZSI6IlZ1cnXFn2thbmVyIiwibG9jYWxlIjoiZW4iLCJpYXQiOjE2NTE3NDQ1ODYsImV4cCI6MTY1MTc0ODE4NiwianRpIjoiNDE0MTNmMWI3MGRlMjM5ZWIwYjllZjFhNDM4MmM4MTZjZmRjYWU5ZCJ9.QqxqPBcVwmDM-riAUIDqReYjiyNJ1U430gPFUwM_lZZ0W_afWo3GdrbLashxJt4NnQMJDf0yrQoHYwgyekrT-QGgP-PHxcrfVy9uAhGjr6ixMGqlc2hSyNBB6m69WWDuChdg47_KxxPJ9JoRsv93oaxtgBmh1hM90alTKCc4d8GlWay0W7z9MSJ9l78v1bstiR-dMV0cdgXYAFxrojW8kO8YuvE8VRvxo4_yzXFAfDcLHNo0kzcQOGbDlwtJPc6KqyCGNTOkXeO9d47prIthCrk9pZXrPTTrkZdqXx1HC7mgKxBcFfQP0NHByITKprUnSRdPEMiFKKo3UTJtIng8wQ",
    "session_state": {
      "extraQueryParams": {
        "authuser": "1"
      }
    },
    "first_issued_at": 1651744587554,
    "expires_at": 1651748186554,
    "idpId": "google"
  },
  "tokenId": "eyJhbGciOiJSUzI1NiIsImtpZCI6ImZjYmQ3ZjQ4MWE4MjVkMTEzZTBkMDNkZDk0ZTYwYjY5ZmYxNjY1YTIiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJhY2NvdW50cy5nb29nbGUuY29tIiwiYXpwIjoiNjQwODg5NjgwNTc3LWZpdWhwZWlnZW40ZmQ1aDRuNWF0OWh0MnY3OGxtbWNyLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwiYXVkIjoiNjQwODg5NjgwNTc3LWZpdWhwZWlnZW40ZmQ1aDRuNWF0OWh0MnY3OGxtbWNyLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwic3ViIjoiMTA4NzU1NTg0NjA0MjIyNzUxNTM5IiwiaGQiOiJzYXJhbWEueHl6IiwiZW1haWwiOiJvZ3V6QHNhcmFtYS54eXoiLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiYXRfaGFzaCI6InJ6U1RuLWM5c1Y0ZlZ0RGc1RUg3dnciLCJuYW1lIjoiT8SfdXogVnVydcWfa2FuZXIiLCJwaWN0dXJlIjoiaHR0cHM6Ly9saDMuZ29vZ2xldXNlcmNvbnRlbnQuY29tL2EvQUFUWEFKelRKRzFYbGNpZ1B2ZnFQTmQ0SXFEVTFGckU3azhnQWtOQW1nTlc9czk2LWMiLCJnaXZlbl9uYW1lIjoiT8SfdXoiLCJmYW1pbHlfbmFtZSI6IlZ1cnXFn2thbmVyIiwibG9jYWxlIjoiZW4iLCJpYXQiOjE2NTE3NDQ1ODYsImV4cCI6MTY1MTc0ODE4NiwianRpIjoiNDE0MTNmMWI3MGRlMjM5ZWIwYjllZjFhNDM4MmM4MTZjZmRjYWU5ZCJ9.QqxqPBcVwmDM-riAUIDqReYjiyNJ1U430gPFUwM_lZZ0W_afWo3GdrbLashxJt4NnQMJDf0yrQoHYwgyekrT-QGgP-PHxcrfVy9uAhGjr6ixMGqlc2hSyNBB6m69WWDuChdg47_KxxPJ9JoRsv93oaxtgBmh1hM90alTKCc4d8GlWay0W7z9MSJ9l78v1bstiR-dMV0cdgXYAFxrojW8kO8YuvE8VRvxo4_yzXFAfDcLHNo0kzcQOGbDlwtJPc6KqyCGNTOkXeO9d47prIthCrk9pZXrPTTrkZdqXx1HC7mgKxBcFfQP0NHByITKprUnSRdPEMiFKKo3UTJtIng8wQ",
  "accessToken": "ya29.A0ARrdaM9Yyia86PjJg9ChX3EgK0z9D66xbh0kLV3RRh2Vt5A5fdUwdJOYkBs2vKuouX0eyBZCGyTYPAVSuIbi0chHtmpVGwKm13FDLsjafCHZwhjrPj082djESHOO5mjFgaMlVSamx41n29L3hqm6hxriAdej",
  "profileObj": {
    "googleId": "108755584604222751539",
    "imageUrl": "https://lh3.googleusercontent.com/a/AATXAJzTJG1XlcigPvfqPNd4IqDU1FrE7k8gAkNAmgNW=s96-c",
    "email": "oguz@sarama.xyz",
    "name": "Oğuz Vuruşkaner",
    "givenName": "Oğuz",
    "familyName": "Vuruşkaner"
  }
}

 */

// Don't forget to add domain.
const clientId = "640889680577-fiuhpeigen4fd5h4n5at9ht2v78lmmcr.apps.googleusercontent.com"
const clientSecret = "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"

const Login = ({dispatchLogin}) => {

    const navigate = useNavigate()

    const updateUser = (authObject) => {
        console.log(authObject)
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

    return <div style={{
        width:"100%",
        height:"60vh",
        display: "flex",
        flexDirection:"column",
        justifyContent:"space-evenly",
        alignItems: "center",
    }}>
        <div>
            <h2>Start training your dog today</h2>
        </div>
        <GoogleLogin
            isSignedIn={true}
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



export default connect(null,mapDispatchToProps)(Login)
