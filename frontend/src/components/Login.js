import { useState } from 'react';
import axios from 'axios';
import { LOGIN_URL } from '../backend_urls.js';


const Login = (props) => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')


  const logMeIn = async (event) => {
    console.log("email: ", email, "password: ", password)
    axios({
      method: 'POST',
      url: LOGIN_URL,
      data: {
        email: email,
        password: password
      }
    })
    .then((response) => {
      console.log(response)
      props.setToken(response.data.access_token)
    }).catch((error) => {
      if (error.response) {
        console.log(error.response)
        console.log(error.response.status)
        console.log(error.response.headers)
        }
    })

    setEmail("")
    setPassword("")

    event.preventDefault()
  }



    const emailChange = (event) => {
      const {value, name} = event.target
      setEmail(value)
    }
    const passwordChange = (event) => {
      const {value, name} = event.target
      setPassword(value)
    }


  return (
    <form>
      <h3>Sign In</h3>
      <div className="mb-3">
        <label>Email address</label>
        <input
          type="email"
          text={email} 
          className="form-control"
          placeholder="Enter email"
          value={email}
          onChange={emailChange}
        />
      </div>
      <div className="mb-3">
        <label>Password</label>
        <input
          type="password"
          text={password}
          className="form-control"
          placeholder="Enter password"
          value={password}
          onChange={passwordChange} 
        />
      </div>
      <div className="mb-3">
        <div className="custom-control custom-checkbox">
          <input
            type="checkbox"
            className="custom-control-input"
            id="customCheck1"
          />
          <label className="custom-control-label" htmlFor="customCheck1">
            Remember me
          </label>
        </div>
      </div>
      <div className="d-grid">
        <button 
          type="submit" 
          className="btn btn-primary"
          onClick={logMeIn}
        >
          Submit
        </button>
      </div>
      {/* <p className="forgot-password text-right">
          Forgot <a href="#">password?</a>
        </p> */}
    </form>
  )
}


export default Login;