import React from 'react';
import { Col, Container, Nav, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ManageInventories = () => {
    return (
        <div>
            <h1>You can manage all items hear!</h1>
            <Container>
                <Row>
                    <Col sm={4}>
                        <h4>
                            Hear is control button.
                        </h4>
                        <Nav.Link as={Link} to="/allproducts">All Product</Nav.Link>
                        <Nav.Link as={Link} to="/addnewitem">Add new item</Nav.Link>
                    </Col>
                    <Col sm={8}>
                        <h3>All Product is hear!</h3>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default ManageInventories;