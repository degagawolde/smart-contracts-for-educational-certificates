import Trainee from './components/Trainee'
import Trainer from './components/Trainer'
import Login from './components/Login'
import { useState } from 'react';
// import {Button, Container, Header, Message} from "semantic-ui-react";

function App() {
   const [token,setToken] = useState(sessionStorage.getItem("token"));
   const [role,setRole] = useState(sessionStorage.getItem("role"));
  return (
    <div className="App">
      {(token && token!=="" && token!==undefined?
      <>
      <div className='content'>
        {(role === "trainee"?
         <Trainee />
         :
         <Trainer />)}
      </div>
      </>
      :
       <div className='content'>
        <Login />
        </div>
        )}
    </div>
  );
}

export default App;
