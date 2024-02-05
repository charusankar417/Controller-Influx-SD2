import React, { useEffect } from 'react'
import { useState } from 'react'
import "./Register.css"
import axios from 'axios'
import {toast} from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

const Register = () => {
  const navigate = useNavigate()
  const [data, setData] = useState({
    email: '', 
    username: '', 
    password: '',
  })

  const registerUser = async (e) => {
    e.preventDefault();
    const {email, username, password} = data;
    try{
        const {data} = await axios.post('/register', {
            email, username, password
        }, true)
        if(data.error){
            toast.error(data.error)
        }
        else{
            setData({})
            toast.success('Registration Succesful. Welcome!')
            navigate('/login')
            
        }
    } catch (error) {
        console.log(error)
    }
  }
  return (

    <div className="">
        <div className="register">
        <form className='form1' onSubmit={registerUser}>
            <label className='email'>Email</label>
            <input type="text" placeholder="Email Address" value={data.email} onChange={(e) => setData({...data, email: e.target.value})}></input>
            <label>Username</label>
            <input type="text" placeholder="Username" value={data.username} onChange={(e) => setData({...data, username: e.target.value})}></input>
            <label>Password</label>
            <input type="text" placeholder="Password" value={data.password} onChange={(e) => setData({...data, password: e.target.value})}></input>
            <button type="submit">Register!</button>
        </form>
    </div>

    </div>
   
    
  )
}

export default Register