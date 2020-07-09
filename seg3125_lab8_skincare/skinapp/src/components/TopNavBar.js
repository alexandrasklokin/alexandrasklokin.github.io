import React,{Component} from 'react';
import {Navbar,Nav} from 'react-bootstrap';
import Logo from "../img/favicon.jpg";

class TopNavBar extends Component {
    render() {
        return (
            <Navbar bg="info" variant="dark">
            <Navbar.Brand href="/welcome"><img src={Logo} alt="Logo"/>  SkinExpert</Navbar.Brand>
            <Nav className="mr-auto">
              <Nav.Link href="/cleanse">Cleanse</Nav.Link>
              <Nav.Link href="/treatment">Treat</Nav.Link>
              <Nav.Link href="/moisturize">Moisturize</Nav.Link>
              <Nav.Link href="/sunprotection">Protect</Nav.Link>
            </Nav>
            <Nav className="ml-auto">
              <Nav.Link href="/quiz">Quiz</Nav.Link>
              <Nav.Link href="/routine">My Routine</Nav.Link>
            </Nav>
          </Navbar>
          
        )
    }
}

export default TopNavBar