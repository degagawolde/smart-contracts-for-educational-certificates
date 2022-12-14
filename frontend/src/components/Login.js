import { useState, useEffect } from "react";
import { Input,FormContainer,SubmitButton,BoxContainer } from "./common";
import { Marginer } from "../marginer";
import Trainee from "./Trainee";
import Trainer from "./Trainer";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [token,setToken] = useState(sessionStorage.getItem("token"));
    const [role,setRole] = useState(sessionStorage.getItem("role"));

    const handleLogin = ()=>{
    const opts = {
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body: JSON.stringify({
        "email":email,
        "password":password
      })
    };
    fetch('http://localhost:7777/api/token',opts)
    .then(resp=>{
      if(resp.status===200) {
        return resp.json();}
      else alert('there has te be some error');
    })
    .then(data=>{
      console.log("coming data",data)
      sessionStorage.setItem("token",data.access_token)
      sessionStorage.setItem('role',data.role)
      setToken(data.access_token);
      setRole(data.role);
    })
    .catch(error=>{
      console.error('there was an error',error);
    })
  }
  const handleClick = ()=>{
 
    if (email==="example@gmail.com" && password=='trainee'){
     sessionStorage.setItem("token","data.access_token");
      sessionStorage.setItem('role','trainee');
       window.location.reload(false);
    }
    else if(email==="example@gmail.com" && password=='trainer'){
      sessionStorage.setItem("token","data.access_token");
      sessionStorage.setItem('role','trainer');
       window.location.reload(false); 
    }
    else{
      alert('there has te be some error');
    }
  }

  useEffect(()=>{
     const token = sessionStorage.getItem("token");
     const role = sessionStorage.getItem("role");
    if (token && token!=="" && token!==undefined){
      window.location.reload(false);
    }
  });
    return (
    
         <BoxContainer>
            <nav className='navbar'>
              <h1>Algorand Based Certificate Generation</h1>
            </nav>
            <FormContainer>
                <Input type="email" placeholder="email" value={email} onChange={(e)=>setEmail(e.target.value)} />
                  <Marginer direction="vertical" margin="1.6em" />
                <Input type="password" placeholder="password" value={password} onChange={(e)=>setPassword(e.target.value)}  />
            </FormContainer>
            <Marginer direction="vertical" margin={10} />
            <Marginer direction="vertical" margin="1.6em" />
            <SubmitButton type="submit" onClick={handleClick}>Signin</SubmitButton>
            <Marginer direction="vertical" margin="1em" />
            {/* {(token && token!=="" && token!==undefined?"you are logged in with token":"you are not logged in")} */}
            <div>
              <p>Use "example@gmail.com" as email and either "trainee" or "trainer" for password.</p> 
              <p>The password trainee is to get the Trainee page and the same is true for the trainer.</p>
              <p>This is becuase the algorand login is not handled in this project.</p>
              <p>Prior to trying this system you should first setup AlgoSigner for your chrome browser.</p>
            </div>
          
    </BoxContainer>
      );
}
 
export default Login
