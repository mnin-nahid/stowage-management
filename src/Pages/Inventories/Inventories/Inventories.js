import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Items from '../Items/Items';
import './Inventories.css'

const Inventories = () => {
    return (
        <div>
            <h2 className='text-center'>Inventories</h2>
            <Items></Items>
            <Nav.Link as={Link} to="/manageinventories" className='btn btn-info w-25 mx-auto my-4 text-center my-2 py-2 display-6'>Manage Inventories</Nav.Link>
        </div>
    );
};

export default Inventories;