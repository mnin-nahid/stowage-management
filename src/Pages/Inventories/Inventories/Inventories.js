import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Inventories = () => {
    return (
        <div>
            <h2>This is Inventories section</h2>
            <Nav.Link as={Link} to="/manageinventories">Manage Inventories</Nav.Link>
        </div>
    );
};

export default Inventories;