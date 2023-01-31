import React from 'react';
import Inventories from '../../Inventories/Inventories/Inventories';
import Banner from '../Banner/Banner';
import OurService from '../OurService/OurService';
import WhoAreWe from '../WhoAreWe/WhoAreWe';

const Home = () => {
    return (
        <div>
            <Banner />
            <Inventories />
            <WhoAreWe />
            <OurService />
        </div>
    );
};

export default Home;