import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css'


const NotFound = () => {
    return (
        <div className='not-found'>
            <h1 className='font-weight-bold'>404</h1>
            <p>Thar is nothing!</p>
            <Link className='text-decoration-none btn btn-link text-primary' to='/'>Back to Home</Link>
        </div>
    );
};

export default NotFound;