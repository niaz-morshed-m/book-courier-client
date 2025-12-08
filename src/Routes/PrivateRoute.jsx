import React from 'react';
import useAuth from '../hooks/useAuth';
import { Navigate } from 'react-router';

const PrivateRoute = ({children}) => {
 const {user, loading} = useAuth()

 if(loading){
    return (
      <div className="flex justify-center items-center mx-auto m-25">
        <span className="loading loading-bars loading-xl"></span>
      </div>
    );
 }

 if (!user){
    return <Navigate to="/login"></Navigate>
 }

return children

};

export default PrivateRoute;