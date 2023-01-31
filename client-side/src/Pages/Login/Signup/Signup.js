import React from 'react';
import { useCreateUserWithEmailAndPassword, useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Looding from '../../Shared/Looding/Looding';
import SocialLogin from '../SocialLogin/SocialLogin';

const Signup = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const navigate = useNavigate();

    let errorElement;
    if (error) {
        errorElement = <div>
            <p className='text-danger'>{error.message}</p>
        </div>
    }

    //Handle Signup Button
    const handlesignup = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        createUserWithEmailAndPassword(email, password, {sendEmailVerification: 'true'});
    }


    if (user) {
        navigate('/');
    }
    if(loading){
        return <Looding></Looding>
    };


    return (
        <div>
            <form onSubmit={handlesignup} className='w-50 mx-auto border my-4 p-4 rounded'>
                <h3 className='text-center'>Sign Up</h3>
                {errorElement}
                <div className="mb-3">
                    <label>First name</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="First name"
                    />
                </div>
                <div className="mb-3">
                    <label>Last name</label>
                    <input type="text" className="form-control" placeholder="Last name" />
                </div>
                <div className="mb-3">
                    <label>Email address</label>
                    <input
                        type="email"
                        name='email'
                        className="form-control"
                        placeholder="Enter email"
                    />
                </div>
                <div className="mb-3">
                    <label>Password</label>
                    <input
                        type="password"
                        name='password'
                        className="form-control"
                        placeholder="Enter password"
                    />
                </div>
                <div className="d-grid">
                    <button type="submit" className="btn btn-dark">
                        Sign Up
                    </button>
                </div>
                <p className="forgot-password text-end pt-3">
                    Alrady have an account? <Link to='/signin'>Sign in</Link> now
                </p>
            </form>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Signup;