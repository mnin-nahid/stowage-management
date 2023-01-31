import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../../firebase.init';
import Looding from '../../Shared/Looding/Looding';

const RequireAuth = ({children}) => {
    const [user, loading] = useAuthState(auth);
    const location = useLocation();

    if(loading){
        return <Looding></Looding>
    };
    if(!user){
        return <Navigate to='/signin' replace state={{from: location}} ></Navigate>
    }
    return children;
};

export default RequireAuth;