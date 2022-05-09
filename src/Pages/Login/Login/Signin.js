import axios from 'axios';
import React, { useState } from 'react';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Looding from '../../Shared/Looding/Looding';
import SocialLogin from '../SocialLogin/SocialLogin';

const Signin = () => {
    const navigate = useNavigate();
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);

    const location = useLocation();

    let from = location.state?.from?.pathname;

    //Handle Sign in
    const handlesignin = async e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        await signInWithEmailAndPassword(email, password);
        const { data } = await axios.post('http://localhost:5000/signin', { email });
        localStorage.setItem('accessToken', data.accessToken);
        navigate(from, { replace: true });

    };
    const [userEmail, setUserEmail] = useState('');
    const userEmailFind = e => {
        const email = e.target.value;
        setUserEmail(email);
    };
    const resetPassword = async () => {
        if (userEmail) {
            await sendPasswordResetEmail(userEmail);
            alert('Sent email');
        }
        else {
            alert('Enter your email.')
        }
    };

    if (user) {
        navigate('/');
    }

    if (user) {
        navigate(from, { replace: true });
    }
    if (loading) {
        return <Looding></Looding>
    }

    // Handle Error
    let errorElement;
    if (error) {
        errorElement = <div>
            <p className='text-danger'>{error.message}</p>
        </div>
    }
    return (
        <div>
            <form onSubmit={handlesignin} className='w-50 mx-auto border my-5 p-4 rounded'>
                <h3 className='text-center'>Sign In</h3>
                {errorElement}
                <div className="mb-3">
                    <label>Email address</label>
                    <input
                        onChange={userEmailFind}
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
                <div className="mb-3">
                    <div className="custom-control custom-checkbox">
                        <input
                            type="checkbox"
                            className="custom-control-input"
                            id="customCheck1"
                        />
                        <label className="custom-control-label ms-2" htmlFor="customCheck1">
                            Remember me
                        </label>
                    </div>
                </div>
                <div className="d-grid">
                    <button type="submit" className="btn btn-dark">
                        Sign In
                    </button>
                </div>
                <p className="forgot-password text-end pt-3">
                    Are you new hear <Link to='/signup'>Sign up</Link> now
                </p>
                <p className="forgot-password text-start pt-3">
                    <button className='btn btn-link text-primary' onClick={resetPassword}>Forgot password?</button>
                </p>
            </form>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Signin;