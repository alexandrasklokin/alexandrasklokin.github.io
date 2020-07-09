import React from 'react'
import {Navbar} from 'react-bootstrap';


const Footer = () => {

    return (
        <div className="bottom"> 
        <br/><br/><br/><br/><br/>
            <Navbar sticky="bottom" bg="info" variant="dark">
                <Navbar.Text><b>Website by: </b>Alexandra Sklokin 300010511</Navbar.Text>
            </Navbar>
        </div>
    )
}

export default Footer