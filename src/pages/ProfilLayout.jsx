import React from 'react'
import { useContext } from 'react'
import { context } from '../context/MainContext';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';

const ProfilLayout = ({children}) => {
const profNavigate = useNavigate();
const lastLocation = useLocation();
const {login} = useContext(context);
if(!login){
    return <Navigate state={lastLocation.pathname} to="/login"/>
    
}
  return (
    <>
   {children}
    </>
  )
}

export default ProfilLayout