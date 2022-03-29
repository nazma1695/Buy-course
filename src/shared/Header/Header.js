import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import useAuth from "../../hooks/useAuth";
import "./Header.css";

const Header = () => {
  const { user, logOut } = useAuth();
  return (
    <>
      <Navbar
        bg="dark"
        variant="dark"
        sticky="top"
        collapseOnSelect
        expand="lg"
      >
        <Container>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Nav className="me-auto">
              <Nav.Link as={HashLink} to="/home">
                Home
              </Nav.Link>
              <Nav.Link as={HashLink} to="/courses">
                Courses
              </Nav.Link>

              {
                <Link to="/blog" className="nav-link">
                  Blog
                </Link>
              }

              <Link to="/contact" className="nav-link">
                Contact
              </Link>
            </Nav>

            <span className="mt-1  me-2 text-white"> {user.displayName} </span>
            {user.email ? (
              <Link to="/login">
                <button onClick={logOut} className="btn btn-danger">
                  Log-out
                </button>
              </Link>
            ) : (
              <Link to="/login">
                <button className="btn me-2 login ">Log In</button>
              </Link>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
