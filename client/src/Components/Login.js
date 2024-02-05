import React from "react";
import { useState } from "react";
import axios from 'axios';
import {toast} from 'react-hot-toast'
import {useNavigate} from 'react-router-dom'

const Login = () => {

  const navigate = useNavigate()
  const [data, setData] = useState({
    username: '', 
    password: '',
  })

  const loginUser = async (e) => {
    e.preventDefault()
    
    const {username,password} = data
    try{
      const {data} = await axios.post('/login', {
        username, 
        password
      });
      
      if(data.error){
        toast.error(data.error)
      } else {
        setData({})
        toast.success('Welcome!')
        navigate('/')
      }
    }catch(error){
      console.log(error)
    }
  }
  return (
    <div>
          <form onSubmit={loginUser}>
            <label>Username</label>
            <input type="text" placeholder="Username" value={data.username} onChange={(e) => setData({...data, username: e.target.value})}></input>
            <label>Password</label>
            <input type="text" placeholder="Password" value={data.password} onChange={(e) => setData({...data, password: e.target.value})}></input>
            <button type="submit" >Login!</button>
        </form>
    </div>
  );
};

export default Login;
