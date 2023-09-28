import React, { useContext, useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import { BubblyLink } from "react-bubbly-transitions";


import { UserContext } from "../context/registercontext";

import Buttonlogout from "./Buttonlogout";

function NavBar() {
 
  const { role } = useContext(UserContext);

  

 

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>Explore With Me</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link>
              <BubblyLink className="nav-link" to="/">
                Home
              </BubblyLink>
            </Nav.Link>
            <Nav.Link>
              <BubblyLink className="nav-link" to="/website/AboutUs">
                About-Us
              </BubblyLink>
            </Nav.Link>
            <Nav.Link>
              <BubblyLink className="nav-link" to="/addposts">
                Sign Up
              </BubblyLink>
            </Nav.Link>
            <Nav.Link>
              <BubblyLink className="nav-link" to="/loginuser">
                Login
              </BubblyLink>
            </Nav.Link>
            <Nav.Link>
              <BubblyLink className="nav-link" to="/addadminposts">
                Sign Up Admin
              </BubblyLink>
            </Nav.Link>
            <Nav.Link>
              <BubblyLink className="nav-link" to="/loginastha">
                Login Admin
              </BubblyLink>
            </Nav.Link>
          </Nav>
        </Container>
        {role == "admin" || role == "user" || localStorage.getItem('role') == 'admin' ||  localStorage.getItem('role') == 'user' ? <Buttonlogout/> : <div>hello</div>}
        
      </Navbar>
    </>
  );
}
export default NavBar;
