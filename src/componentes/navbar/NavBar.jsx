import CartWidget from './Cartwidget';
import './NavBar.scss'
import Navbar from 'react-bootstrap/Navbar'
import { Button, Form, Nav, NavDropdown, FormControl } from 'react-bootstrap';
import { BiSearchAlt2 } from "react-icons/bi";
import { NavLink } from "react-router-dom";



function NavBar ({id}) {

    return (
      <nav classsName="nav_menu">       
        <Navbar sticky="top" collapseOnSelect expand="lg" bg="light" variant="light">
          
          <Navbar.Brand> <NavLink className="nav_menu_link" to={"/"}><img alt=""/>LOGO</NavLink></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />

          <Navbar.Collapse id="responsive-navbar-nav mb-2">
          
            <Nav className="mr-auto">
              
              <Nav.Link ><NavLink className="nav_menu_link" to={"/"}>Inicio</NavLink></Nav.Link>
              
              
              <NavDropdown title="Productos" id="collasible-nav-dropdown">
                
                <NavDropdown.Item><NavLink className="nav_menu_link" to={"/category/1"}>Tipo 1</NavLink></NavDropdown.Item>
                <NavDropdown.Item><NavLink className="nav_menu_link" to={"/category/2"}>Tipo 2</NavLink></NavDropdown.Item>
                <NavDropdown.Item><NavLink className="nav_menu_link" to={"/category/3"}>Tipo 3</NavLink></NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item><NavLink className="nav_menu_link" to={"/"}>Todos los Productos</NavLink></NavDropdown.Item>
                
              </NavDropdown>

            </Nav>
                    
            <Nav className="mr-right">

              <Form className="nav_menu_form" inline>
              
                    <FormControl type="text" placeholder="Search" className="mr-1 sm-2" />
              
                    <Button variant="outline-secondary"><BiSearchAlt2 size={30}/></Button>
                               
            
              </Form>

              <Nav.Link role="button"> <NavLink className="nav_menu_link" to={"/"}><CartWidget/></NavLink> </Nav.Link> 
              
              </Nav>
          
        </Navbar.Collapse>
      
        

      </Navbar>
    </nav>
    );

};

export default NavBar;