import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';

const Header = () => {
    const [user] = useAuthState(auth);
    const handleSignOut = () => {
        signOut(auth);
    }
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to="/">
                        STOWAGE
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto">
                            <Nav.Link as={Link} to="/">Home</Nav.Link>
                            <Nav.Link as={Link} to="/manageinventories">ManageInventories</Nav.Link>
                            <Nav.Link as={Link} to="/blogs">Blogs</Nav.Link>
                        </Nav>
                        <Nav className="ms-auto">
                            {
                                user ?
                                    <>
                                        <Nav.Link as={Link} to='/addnewitem'>Add Item</Nav.Link>
                                        <Nav.Link as={Link} to='/myitems'>My Items</Nav.Link>
                                        <Nav.Link className='btn btn-danger text-white py-2' onClick={handleSignOut}>Sign Out</Nav.Link>
                                    </>
                                    :
                                    <>
                                        <Nav.Link as={Link} to="/signup">Sign up</Nav.Link>
                                        <Nav.Link as={Link} to="/signin">Sign in</Nav.Link>
                                    </>

                            }

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;