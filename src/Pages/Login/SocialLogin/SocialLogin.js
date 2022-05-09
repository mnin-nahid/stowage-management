import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';


const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname;


    let errorElement;

    if (error) {
        errorElement = <div>
            <p className='text-danger'>{error.message}</p>
        </div>
    }

    if (user) {
        navigate(from, { replace: true });
    }
    return (
        <div>
            {errorElement}
            <div>
                <button
                    onClick={() => signInWithGoogle()}
                    className='btn btn-info w-50 mt-3 d-block mx-auto'>
                    <i className='fab fa-google'></i>
                    <span className='px-2'>With Google</span>
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;