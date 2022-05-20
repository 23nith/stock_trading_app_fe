import logo from './logo.svg';
import './App.css';
import Login from './components/login';
import axios from 'axios';
import { useEffect, useState } from 'react';

const API_URL = 'http://localhost:3000/Login'


function App() {

  return (
    <div className="App">
      <Login/>
    </div>
  );
}

export default App;
