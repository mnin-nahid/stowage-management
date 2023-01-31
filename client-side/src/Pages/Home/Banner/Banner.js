import React from 'react';
import './Banner.css'

const Banner = () => {
    return (
        <div className='top-banner'>
            <div className="container">
                <div className="row">
                    <div className="col-sm-6">
                        <h2 className='font-weight-bold'>STOWAGE, <br /> We take care your product!</h2>
                        <button className='btn btn-dark'>Contruct US</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;