import { useEffect, useState } from "react";

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [responseHeader, setResponseHeader] = useState('')
  const [responseData, setResponseData] = useState('')

  const handleOnSubmit = (e) => {
    e.preventDefault();

    const onLogin = async () => {
      // const responseBody = await fetch(`http://localhost:3000/login?email=${email}&password=${password}`, {
      const responseBody = await fetch(`http://localhost:3000/login?` + new URLSearchParams({email: email, password: password}), {
        method: 'POST'
      })
      .then(response => {
        // let theData = {
        //   Authorization: response.headers.get('Authorization')
        // }
        // setResponseHeader(theData)
        // console.log("login response header: ", theData)
        console.log("login response header: ", response)
        return response.json();
      })
      .then(data => {
        setResponseData(data.data);
        console.log("login details: ", data.data);
      })
      return responseBody;

    }

    onLogin();

  }

  useEffect(() => {
    if(responseData !== null && responseHeader !== null){
        console.log("response header and data: ", `${JSON.stringify(responseHeader)}, ${JSON.stringify(responseData)}`)
    }
  }, [responseData])

  return ( 
    <form onSubmit={handleOnSubmit}>
      <input type="text" placeholder="email" value={email} onChange={(e)=>{setEmail(e.target.value)}} />
      <input type="password" placeholder="password" value={password} onChange={(e)=>{setPassword(e.target.value)}} />
      <input type="submit" value="login" />
    </form>
  );
}
 
export default Login;
