import React from 'react';
import Inventories from '../../Inventories/Inventories/Inventories';
import Banner from '../Banner/Banner';
import OurService from '../OurService/OurService';

const Home = () => {
    return (
        <div>
            <Banner />
            <Inventories />
            <OurService />
        </div>
    );
};

export default Home;