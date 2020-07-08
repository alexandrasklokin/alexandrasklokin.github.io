import React,{Component} from 'react';
import {Container,Jumbotron} from 'react-bootstrap'
import Question from "../img/question.jpg";

class Quiz extends Component {
    render() {
        return (
            <Container>
            <br/><br/>
                <Jumbotron>
                    <h1><img src={Question} alt="Logo"/> Quiz</h1>
                    <p> let's get to know each other.</p>
                </Jumbotron> 

                <Jumbotron>
                    
                </Jumbotron> 

            </Container>
        )
    }
}

export default Quiz