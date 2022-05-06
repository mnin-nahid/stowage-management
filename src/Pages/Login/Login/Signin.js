import React from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';

const Signin = () => {
    const navigate = useNavigate();
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    //Handle Sign in
    const handlesignin = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        // console.log(email, password);
        signInWithEmailAndPassword(email, password);

    }

    if(user){
        navigate('/');
    }

    // hendle Error
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
                        Submit
                    </button>
                </div>
                <p className="forgot-password text-end pt-3">
                    Forgot <a href="#">password?</a>
                </p>
            </form>
        </div>
    );
};

export default Signin;