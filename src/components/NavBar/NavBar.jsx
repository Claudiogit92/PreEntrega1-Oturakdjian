import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from './CartWidget';
import './NavBar.css';

const NavBar = () => {
    
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
        <Container className='navBar-head'>
          <Navbar.Brand href="#home" style={{color: "white"}}>Cross Bikes</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home" style={{color: "white"}}>Home</Nav.Link>
              <Nav.Link href="#link" style={{color: "white"}}>Nosotros</Nav.Link>
              <NavDropdown title={<span style={{color: "white"}}>Productos</span>} id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Cascos</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Vestimenta y proteccion</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Neumaticos</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Accesosrios</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Repuesto</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Mantenimiento</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Service</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#link" className='cart-responsive'>Carrito</Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <CartWidget />
        </Container>
      </Navbar>
    )
}

export default NavBar;