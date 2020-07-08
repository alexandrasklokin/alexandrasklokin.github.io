import React,{Component} from 'react';
import {Container,Jumbotron} from 'react-bootstrap'
import Face from "../img/face.jpg";

class Routine extends Component {
    render() {
        return (
            <Container>
            <br/><br/>
                <Jumbotron>
                    <h1><img src={Face} alt="Logo"/> Routine</h1>
                </Jumbotron> 

                <Jumbotron>
                    
                </Jumbotron> 

            </Container>
        )
    }
}

export default Routine