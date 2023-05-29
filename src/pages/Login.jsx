import React from 'react'
import { useContext } from 'react'
import { context } from '../context/MainContext'
import { Navigate, useLocation, useNavigate } from 'react-router-dom'

const Login = () => {
const navigate = useNavigate();
const location = useLocation();
console.log(location);
const onclick=()=>{
setLogin("samir");
navigate(location.state)
}

    const {setLogin} = useContext(context)
  return (
    <div>Login
        <button onClick={onclick}>giris</button>
    </div>
    
  )
}

export default Login