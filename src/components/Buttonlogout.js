import React, { useContext } from 'react'
import { Button, Container, Nav } from 'react-bootstrap'
import { UserContext } from '../context/registercontext';

function Buttonlogout() {
    const {setrole,role,settoken,settogglelogout,togglelogout,setloggedinUser} = useContext(UserContext);


    const logout = () => {
        localStorage.setItem("token", "");
        localStorage.setItem("role", "");
        localStorage.setItem("UserLoggedIn", "");
        
        setrole("");
        setloggedinUser("");

        settogglelogout(!togglelogout);
        
        
      };

  return (
    <Container>
    <Nav className="me-auto">
      <Button variant="light" onClick={logout}>
        LOGOUT
      </Button>
    </Nav>
  </Container>
  )
}

export default Buttonlogout




