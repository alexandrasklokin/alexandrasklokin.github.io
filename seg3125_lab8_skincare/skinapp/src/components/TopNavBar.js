import React,{Component} from 'react';
import {Navbar,Nav} from 'react-bootstrap';
import {NavLink} from 'react-router-dom'
import Logo from "../img/favicon.jpg";

class TopNavBar extends Component {
    render() {
        return (
            <Navbar bg="info" variant="dark" key={Math.random}>
            <div className="navbrand"><NavLink to='/welcome' className="link"><img src={Logo} alt="Logo"/>  SkinExpert</NavLink></div>
            <Nav className="mr-auto">
              <div className="navlink">||</div>
              <div className="navlink"><NavLink to='/cleanse' className="link">Cleanse</NavLink></div>
              <div className="navlink">||</div>
              <div className="navlink"><NavLink to='/treatment' className="link">Treat</NavLink></div>
              <div className="navlink">||</div>
              <div className="navlink"><NavLink to='/moisturize' className="link">Moisturize</NavLink></div>
              <div className="navlink">||</div>
              <div className="navlink"><NavLink to='/sunprotection' className="link">Protect</NavLink></div>
              <div className="navlink">||</div>
            </Nav>

            <Nav className="ml-auto">
              <div className="navlink">||</div>
              <div className="navlink"><NavLink to='/routine' className="link">My Routine</NavLink></div>
              <div className="navlink">||</div>
              <div className="navlink"><NavLink to='/quiz' className="link">Quiz</NavLink></div>
              <div className="navlink">||</div>
              <div className="navlink"><NavLink to='/results' className="link">Results</NavLink></div>
            </Nav>
          </Navbar>
          
        )
    }
}

export default TopNavBar