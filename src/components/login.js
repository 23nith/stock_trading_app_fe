import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';

const Login = ({setShowLogin}) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [responseHeader, setResponseHeader] = useState('')
  const [responseData, setResponseData] = useState('')

  const handleOnSubmit = (e) => {
    e.preventDefault();

    const onLogin = async () => {
      fetch("http://localhost:3000/login", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user: {
            email: email,
            password: password,
          },
        }),
      })
      .then((res) => {
        if (res.ok) {
          console.log(res.headers.get("Authorization"));
          localStorage.setItem("token", res.headers.get("Authorization"));
          if (res.headers.get("Authorization") != null){
            setShowLogin(false)
          }
          return res.json();
        } else {
          throw new Error(res);
        }
      })
    }

    onLogin();

  }

  useEffect(() => {
    if(responseData !== null && responseHeader !== null){
        console.log("response header and data: ", `${JSON.stringify(responseHeader)}, ${JSON.stringify(responseData)}`)
    }
  }, [responseData, responseHeader])

  useEffect(() => {
    const onUnmount = async () => {
      console.log("unmounted")
      fetch("http://localhost:3000/current_user", {
        method: "get",
        headers: {
          "Content-Type": "application/json",
          "Authorization": localStorage.getItem("token")
        }
      })
      .then((res) => {
        if (res.ok) {
          console.log("response: ", res);
        }
        return res.json();
      })
      .then((data) => {
        console.log("data: ", data.role);
        localStorage.setItem("user_type", data.role);
      })
    }
  
    
    return () => {
      onUnmount();
    }
  }, [])
  

  return ( 
    <div className="w-screen h-screen flex justify-center items-center border-slate-800 border-2">
      <div>
        <form onSubmit={handleOnSubmit} className="" >
          <input type="text" placeholder="email" value={email} 
            onChange={(e)=>{setEmail(e.target.value)}} 
            className='rounded-md border-slate-800 border-2 m-2 p-1 w-64'
            />
          <br/>
          <input type="password" placeholder="password" 
            value={password} onChange={(e)=>{setPassword(e.target.value)}} 
            className='rounded-md border-slate-800 border-2 m-2 p-1 w-64'
            />
          <br/>
          <input type="submit" value="login" 
            className='rounded bg-sky-500/100 w-24 p-1 text-white'
          />
        </form>
      </div>
    </div>
  );
}
 
export default Login;
