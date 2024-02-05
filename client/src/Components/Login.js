import React from "react";
import { useState } from "react";
import axios from 'axios';
import {toast} from 'react-hot-toast'
import {useNavigate} from 'react-router-dom'
import './Login.css'
import Navbar from "./Navbar";

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
        console.log("Success!")
        toast.success('Welcome!')
        navigate('/admin', {replace: true})
      }
    }catch(error){
      console.log(error)
    }
  }
  return (
    <div id="bg">
      <Navbar/>
          <form onSubmit={loginUser} className="form-div">
            <div className="entry">
              <div className="e1">
                <label>Username</label>
                <input type="text" placeholder="Username" value={data.username} onChange={(e) => setData({...data, username: e.target.value})}></input>
              </div>
              <div className="e1"><label>Password</label>
            <input type="text" placeholder="Password" value={data.password} onChange={(e) => setData({...data, password: e.target.value})}></input>
            </div>
            </div>
            <div className="e2">
              <button type="submit" className="submit">Login!</button>
            </div>
            <div className="register-q">New Admin?
              <a href="http://localhost:3002/register"> Register Now!</a>
            </div>
        </form>
    </div>
  );
};

export default Login;
