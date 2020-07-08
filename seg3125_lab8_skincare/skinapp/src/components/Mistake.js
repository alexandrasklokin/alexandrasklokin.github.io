import React,{Component} from 'react'
import {Container,Jumbotron} from 'react-bootstrap'

class Mistake extends Component {
    render() {
        return (
            <Container>
            <br/><br/>
                <Jumbotron>
                    <h1>Oops! Page was not found.</h1>
                    <p>The page you are looking for doesn't seem to exist. Try nagivating to another page using the menu bar at the top of the page. We are so very sorry for the inconvenience.</p> 
                </Jumbotron> 
            </Container>
        )
    }
}

export default Mistake