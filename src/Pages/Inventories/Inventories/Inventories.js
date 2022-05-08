import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Items from '../Items/Items';

const Inventories = () => {
    return (
        <div>
            <h2 className='text-center'>This is Inventories section</h2>
            <Items></Items>
            <Nav.Link as={Link} to="/manageinventories" className='text-center py-2 display-6'>Manage Inventories</Nav.Link>
        </div>
    );
};

export default Inventories;