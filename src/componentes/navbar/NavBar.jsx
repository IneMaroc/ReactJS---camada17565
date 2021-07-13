import CartWidget from './Cartwidget';
import './NavBar.scss'
import Navbar from 'react-bootstrap/Navbar'
import { Button, Form, Nav, NavDropdown, FormControl } from 'react-bootstrap';
import { BiSearchAlt2 } from "react-icons/bi";
import { NavLink } from "react-router-dom";



function NavBar ({id}) {

    return (
      <nav className="nav_menu">       
        <Navbar sticky="top" collapseOnSelect expand="lg" bg="light" variant="light">
          
          <Navbar.Brand exact as={NavLink} className="nav_menu_link" to={"/"}> <img alt=""/>LOGO</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />

          <Navbar.Collapse id="responsive-navbar-nav mb-2">
          
            <Nav className="mr-auto">
              
              <Nav.Link as={NavLink} className="nav_menu_link" exact to={"/"}>Inicio</Nav.Link>
              
              
              <NavDropdown title="Productos" id="collasible-nav-dropdown">
                
                <NavDropdown.Item as={NavLink} className="nav_menu_link" to={"/category/A"}>Tipo A</NavDropdown.Item>
                <NavDropdown.Item as={NavLink} className="nav_menu_link" to={"/category/B"}>Tipo B </NavDropdown.Item>
                <NavDropdown.Item as={NavLink} className="nav_menu_link" to={"/category/C"}>Tipo C</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={NavLink} className="nav_menu_link" exact to={"/"}>Todos los Productos</NavDropdown.Item>
                
              </NavDropdown>

            </Nav>
                    
            <Nav className="mr-right">

              <Form className="nav_menu_form" inline>
              
                    <FormControl type="text" placeholder="Search" className="mr-1 sm-2" />
              
                    <Button variant="outline-secondary"><BiSearchAlt2 size={30}/></Button>
                               
            
              </Form>

              <Nav.Link as={NavLink} role="button" className="nav_menu_link" to={"/checkout"}> <CartWidget/> </Nav.Link> 
              
              </Nav>
          
        </Navbar.Collapse>
      
        

      </Navbar>
    </nav>
    );

};

export default NavBar;