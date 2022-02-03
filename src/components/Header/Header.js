import './Header.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

// Importing React useRef and useEffect
import { useRef, useEffect } from 'react';

function Header() {

    const navbar = useRef();

    useEffect(() => {
        document.addEventListener('scroll', () =>{
            if(navbar.current.offsetTop > 0) {
                navbar.current.style.backgroundColor = 'var(--secondary-bg-color-dropped-opacity)';
            } else {
                navbar.current.style.backgroundColor = 'var(--secondary-bg-color)';
            }
        });
    });

    return(
        <Navbar className='header-bar' variant='light' sticky='top' expand="lg" ref={navbar}>
            <Container fluid>
                <Navbar.Brand href="/" className='header-logo'>Elio Gerges</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav className="me-auto my-2 my-lg-0 header-nav-items">
                        <Nav.Link href="#action1">Home</Nav.Link>
                        <Nav.Link href="#action2">Link</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header;