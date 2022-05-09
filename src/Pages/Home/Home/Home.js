import React from 'react';
import Inventories from '../../Inventories/Inventories/Inventories';
import Banner from '../Banner/Banner';
import Deshbord from '../Deshbord/Deshbord';

const Home = () => {
    return (
        <div>
            <Banner />
            <Inventories />
            <Deshbord></Deshbord>
        </div>
    );
};

export default Home;