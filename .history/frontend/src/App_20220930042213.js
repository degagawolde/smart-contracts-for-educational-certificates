import React from 'react'
import './App.css'
import logo from './logo.png'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Login from './components/Login'
import SignUp from './components/Signup'
import Logout from './components/Logout'
import useToken from './components/useToken'
import { USER_URL } from './backend_urls.js';

const App = () => {
  const { token, removeToken, setToken } = useToken();
  // console.log(token)
  return (
    <Router>
      <div className="App">
        {/* <h1 className="text" >
          10 Academy certeficate NFT minter
        </h1> */}
        <Logout token={removeToken} />
        
        {token!=="" &&token!== null ?  
        (
          <>
            <Routes>
              {/* <Route exact path="/user" element={<Profile token={token}/>}></Route> */}
              <Route exact path={USER_URL} ></Route>
              {/* <h1>{USER_URL}</h1> */}

            </Routes>
          </>
        )
        :
        (
          <>
            <nav className="navbar navbar-expand-lg navbar-light fixed-top">
              <div className="container">
              <Link className="navbar-brand" to={'/'} ><img src={logo} alt="brand" /></Link>
                
                <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                  <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                      <Link className="nav-link" to={'/sign-in'}>
                        Login
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to={'/sign-up'}>
                        Sign up
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
            <div className="auth-wrapper">
              <div className="auth-inner">
                <Routes>
                  <Route exact path="/" element={<Login setToken={setToken} />} />
                  <Route path="/sign-in" element={<Login setToken={setToken} />} />
                  <Route path="/sign-up" element={<SignUp />} />
                </Routes>
              </div>
            </div>
          </>
          )
      }
        
      </div>
    </Router>
  )
}


export default App