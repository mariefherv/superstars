import { Link, NavLink } from "react-router-dom";
import { Navbar, Container, Nav, Form, Button } from "react-bootstrap";
import { Search } from "lucide-react"; 
import logo from "../logo.png"; 

export default function AppNavbar() {
  return (
    <Navbar className="custom-navbar" expand="lg">
      <Container fluid>
        <div className="navbar-left-bg">
          <Navbar.Brand as={Link} to="/" className="logo-container">
            <img src={logo} alt="The Superstars Logo" className="logo" />
          </Navbar.Brand>
        </div>

        {/* Toggle Button (Remains on Right) */}
        <Navbar.Toggle aria-controls="navbar-nav" />

        {/* Navbar Links */}
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={NavLink} to="/">Home</Nav.Link>
            <Nav.Link as={NavLink} to="/physics">Physics</Nav.Link>
            <Nav.Link as={NavLink} to="/biology">Biology</Nav.Link>
            <Nav.Link as={NavLink} to="/chemistry">Chemistry</Nav.Link>
            <Nav.Link as={NavLink} to="/health">Health</Nav.Link>
            <Nav.Link as={NavLink} to="/technology">Technology</Nav.Link>
          </Nav>

          {/* Search and Icons */}
          <div className="icons d-flex justify-content-end ms-auto my-2">
            <Form className="d-flex">
              <Form.Control type="search" placeholder="Search" className="me-2" aria-label="Search" />
              <Button className="custom-btn border-0">
                <Search size={20} className="icon" color="white" />
              </Button>
            </Form>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
