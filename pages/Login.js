import React,{useState} from 'react'
import styled from 'styled-components';
function Login(){
  const[user,setUser]=useState("");
  const[password,setPassword]=useState("");
  const[userErr,setUserErr]=useState(false);
  const[passErr,setPassErr]=useState(false);
  const Button = styled.button`
  color: black;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

function loginHandle(e)
{
  if(user.length<5 || password.length<5)
    {
      alert("type correct value")
    }
  else
    {
      alert("all good :)")
    }
  e.preventDefault()
}
function userHandler(e){
let item =e.target.value;
if(item.length<5)
{
  setUserErr(true)
}
else
{
 setUserErr(false)
}
  setUser(item)
 }
function passwordHandler(e){
  let item=e.target.value;
  if(item.length<5)
  {
    setPassErr(true)
  }
  else
  {
    setPassErr(false)
  }
  setPassword(item)
}

return(
   <div>
    <center><h1>Login Page</h1><br/><br/>
    <form onSubmit={loginHandle}>
      <input type="text" placeholder="Enter User Id"
      onChange={userHandler}  style={{width: "300px"}}/><br/>
       {userErr?<span
         style={{
          fontWeight: "bold",
          color: "red"
        }}> Invalid UserId</span>:""}
      <br/><br/>

      <input type="password" placeholder="Enter User Password" 
      onChange={passwordHandler} style={{width: "300px"}}/><br/>
      {passErr?<span
        style={{
          fontWeight: "bold",
          color: "red"
        }}>Invalid Password</span>:""}
      <br/><br/>

      <Button onClick="submit">Login</Button>
    </form>
    </center>

    <style jsx global>
  {`
      body {
          background: pink;
       }
   `}
</style>
  </div>
)
}
export default Login;