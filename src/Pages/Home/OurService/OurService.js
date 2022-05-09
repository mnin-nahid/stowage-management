import React, { useEffect, useState } from 'react';
import './Ourservice.css'

const OurService = () => {
    const [services, setServices] = useState([]);
    useEffect( ()=>{
        fetch('https://mysterious-beach-33208.herokuapp.com/service')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])
    return (
        <div className='mt-4 container'>
            <h2 className='text-center font-weight-normal'>Why We Are The Best</h2>
            <div className='our-services'>
                {
                    services.map(service => <div>
                        <img src={service.img} alt="" />
                        <h3>{service.name}</h3>
                    </div>)
                }
            </div>
        </div>
    );
};

export default OurService;