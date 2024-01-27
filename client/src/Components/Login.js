import React from "react";
import { useState } from "react";
import axios from 'axios';

const Login = () => {

  const [data, setData] = useState({
    username: '', 
    password: '',
  })

  const loginUser = (e) => {
    e.preventDefault()
    axios.get('/')
  }
  return (
    <div>
          <form onSubmit={loginUser}>
            <label>Username</label>
            <input type="text" placeholder="Username" value={data.username} onChange={(e) => setData({...data, username: e.target.value})}></input>
            <label>Password</label>
            <input type="text" placeholder="Password" value={data.password} onChange={(e) => setData({...data, password: e.target.value})}></input>
            <button type="submit">Login!</button>
        </form>
    </div>
  );
};

export default Login;
