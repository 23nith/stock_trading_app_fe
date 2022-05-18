import logo from './logo.svg';
import './App.css';
import Login from './components/login';
import axios from 'axios';
import { useEffect, useState } from 'react';

const API_URL = 'http://localhost:3000/Login'

function getAPIDATA() {
  return axios.get(API_URL).then((response) => response.data)
}

function App() {
  const [login, setLogin] = useState([])

  // useEffect(() => {
  //   let mounted = true;
  //   getAPIDATA().then((items) => {
  //     if(mounted){
  //       setLogin(items);
  //     }
  //   });
  //   return () => {mounted = false}
  // }, [])
  

  return (
    <div className="App">
      <Login/>
    </div>
  );
}

export default App;
