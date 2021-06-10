import CartWidget from './Cartwidget';
import './NavBar.scss'
import Navbar from 'react-bootstrap/Navbar'
import { Button, Form, Nav, NavDropdown, FormControl } from 'react-bootstrap';



function NavBar () {

    return (
      <>       
        <Navbar sticky="top" collapseOnSelect expand="lg" bg="light" variant="light">
          
          <Navbar.Brand href="#inicio"> <img alt=""/>LOGO</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />

          <Navbar.Collapse id="responsive-navbar-nav">
          
            <Nav className="mr-auto">
              
              <Nav.Link href="#Inicio">Inicio</Nav.Link>
              <Nav.Link href="#Nosotros">Un Poco de Nosotros</Nav.Link>
              
              <NavDropdown title="Productos" id="collasible-nav-dropdown">
                
                <NavDropdown.Item href="#producto/3.1">Tipo 1</NavDropdown.Item>
                <NavDropdown.Item href="#producto/3.2">Tipo 2</NavDropdown.Item>
                <NavDropdown.Item href="#producto/3.3">Tipo 3</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#productos/3.4">Todos los Productos</NavDropdown.Item>
                
              </NavDropdown>

                    
            </Nav>

            <Nav className="mr-right">

              <Form inline>
              
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
              
                    <Button variant="outline-secondary">Buscar</Button>
                               
            
              </Form>

              <Nav.Link className="btn btn-secondary CartWidgetLink" href="#Carrito" role="button"> <CartWidget /> </Nav.Link> {/* cuando colapse agregar mt-4*/}
              
            </Nav>
          
        </Navbar.Collapse>
      
        

      </Navbar>
    </>
    );

};

export default NavBar;