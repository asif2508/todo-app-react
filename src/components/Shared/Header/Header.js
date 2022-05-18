import React from 'react';
import {Navbar, Container, Nav} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';
import auth from '../../../firebase.init';
const Header = () => {
    const [user] = useAuthState(auth);
    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">Universal Todo</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link as={Link} to='/' href="#home">Home</Nav.Link>
                            <Nav.Link as={Link} to='todo' href="#link">Todo</Nav.Link>
                            {
                                user ? 
                                <Nav.Link onClick={()=> signOut()} as={Link} to='/'>SignOut</Nav.Link>
                                :
                                <Nav.Link as={Link} to='login' href="#link">Login</Nav.Link>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;