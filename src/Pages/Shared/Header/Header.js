import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

const Header = () => {
    return (
        <div>
            <>
                <Navbar bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand href="#home">STOWAGE</Navbar.Brand>
                        <Nav className="mx-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#features">Features</Nav.Link>
                            <Nav.Link href="#blogs">Blogs</Nav.Link>
                        </Nav>
                        <Nav className="ms-auto">
                            <Nav.Link href="#register">Register</Nav.Link>
                            <Nav.Link href="#login">Login</Nav.Link>
                            <Nav.Link href="#features">Logout</Nav.Link>
                        </Nav>
                    </Container>
                </Navbar>
            </>
        </div>
    );
};

export default Header;