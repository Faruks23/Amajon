import React, { useContext } from 'react';
import { BallTriangle } from "react-loader-spinner";
import { AuthContext } from '../component/Privet/AuthProvider';
import Login from '../component/Login/Login';
import { Navigate, useLocation } from 'react-router-dom';

const PrivetRout = ({ children }) => {
  const location = useLocation()
  
  const { user, loading } = useContext(AuthContext);
  if (loading) {
     return (
       <BallTriangle
         height={100}
         width={100}
         radius={5}
         color="#4fa94d"
         ariaLabel="ball-triangle-loading"
         wrapperClass={{}}
         wrapperStyle=""
         visible={true}
       />
     );
   }
  if (user) {
    return children;
  }

  return <Navigate to='/login'state={{ from: location}}></Navigate>
};

export default PrivetRout;