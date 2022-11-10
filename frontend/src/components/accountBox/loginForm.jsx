import React, { useContext, useState } from "react";
import {
  BoldLink,
  BoxContainer,
  FormContainer,
  Input,
  MutedLink,
  SubmitButton,
} from "./common";
import { Marginer } from "../marginer";
import { AccountContext } from "./accountContext";
// import {Context} from "./accountContext"

export function LoginForm(props) {
  const { switchToSignup } = useContext(AccountContext);
  // const {store, actions}  = useContext(Context);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const token = sessionStorage.getItem("token");
  const handleClick = ()=>{
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
      if(resp.status===200) return resp.json();
      else alert('there has te be some error');
    })
    .then(data=>{
      console.log("coming data",data)
      sessionStorage.setItem("token",data.access_token)
    })
    .catch(error=>{
      console.error('there was an error',error);
    })
  }

  return (
    <BoxContainer>
      <FormContainer>
        <Input type="email" placeholder="email" value={email} onChange={(e)=>setEmail(e.target.value)} />
        <Input type="password" placeholder="password" value={password} onChange={(e)=>setPassword(e.target.value)}  />
      </FormContainer>
      <Marginer direction="vertical" margin={10} />
      <MutedLink href="#">Forget your password?</MutedLink>
      <Marginer direction="vertical" margin="1.6em" />
      <SubmitButton type="submit" onClick={handleClick}>Signin</SubmitButton>
      <Marginer direction="vertical" margin="1em" />
      {(token && token!=="" && token!==undefined?"you are logged in with token"+token:"you are not logged in")}
      <MutedLink href="#">
        Don't have an accoun?{" "}
        <BoldLink href="#" onClick={switchToSignup}>
          Signup
        </BoldLink>
      </MutedLink>
    </BoxContainer>
  );
}