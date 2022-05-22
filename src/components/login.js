import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';

const Login = () => {
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

  return ( 
    <form onSubmit={handleOnSubmit}>
      <input type="text" placeholder="email" value={email} onChange={(e)=>{setEmail(e.target.value)}} />
      <br/>
      <br/>
      <input type="password" placeholder="password" value={password} onChange={(e)=>{setPassword(e.target.value)}} />
      <br/>
      <input type="submit" value="login" />
      <br/>
      <Link to="/dashboard">Go to Dashboard</Link>
      <br/>
      <Link to="/wireframe">Go to Wireframe</Link>
    </form>
  );
}
 
export default Login;
