import { useState } from 'react';
import axios from 'axios';
import { SIGNUP_URL } from '../backend_urls.js';

const SignUp = (props) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')

    const signMeUp = async (event) => {
        console.log("email: ", email, "password: ", password)
        axios({
            method: 'POST',
            url: SIGNUP_URL,
            data: {
                first_name: firstName,
                last_name: lastName,
                email: email,
                password: password
            }
        })
        .catch((error) => {
                if (error.response) {
                    console.log(error.response)
                    console.log(error.response.status)
                    console.log(error.response.headers)
                }
            })

        setEmail("")
        setPassword("")
        setFirstName("")
        setLastName("")

        event.preventDefault()
    }



    const emailChange = (event) => {
        const { value, name } = event.target
        setEmail(value)
    }
    const passwordChange = (event) => {
        const { value, name } = event.target
        setPassword(value)
    }
    const firstNameChange = (event) => {
        const { value, name } = event.target
        setFirstName(value)
    }
    const lastNameChange = (event) => {
        const { value, name } = event.target
        setLastName(value)
    }
    return (
        <form>
            <h3>Sign Up</h3>
            <div className="mb-3">
                <label>First name</label>
                <input
                    type="text"
                    className="form-control"
                    placeholder="First name"
                    text={firstName}
                    value={firstName}
                    onChange={firstNameChange}
                />
            </div>
            <div className="mb-3">
                <label>Last name</label>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Last name"
                    text={lastName}
                    value={lastName}
                    onChange={lastNameChange} />
            </div>
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
            <div className="d-grid">
                <button type="submit" className="btn btn-primary" onClick={signMeUp}>
                    Sign Up
                </button>
            </div>
            <p className="forgot-password text-right">
                Already registered <a href="/sign-in">sign in?</a>
            </p>
        </form>
    )
}

export default SignUp;