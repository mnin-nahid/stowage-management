import React from 'react';
import Inventories from '../../Inventories/Inventories/Inventories';
import Banner from '../Banner/Banner';
import Products from '../Products/Products';

const Home = () => {
    return (
        <div>
            <p>This is home</p>
            <Banner />
            <Inventories />
            <Products />
        </div>
    );
};

export default Home;