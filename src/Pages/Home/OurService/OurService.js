import React, { useEffect, useState } from 'react';

const OurService = () => {
    const [services, setServices] = useState([]);
    useEffect( ()=>{
        fetch('http://localhost:5000/service')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])
    return (
        <div className='mt-4'>
            <h2 className='text-center font-weight-normal'>Why We Are The Best</h2>
            <div>
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