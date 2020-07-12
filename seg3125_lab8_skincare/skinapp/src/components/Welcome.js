import React from 'react'
import {Container,Jumbotron,Button} from 'react-bootstrap'

const Welcome = () => {
    return (
        <Container key={Math.random}>
        <br/><br/>
            <Jumbotron>
                <h1>Welcome to <i>SkinExpert</i>,</h1>
                <br/>
                <p>your virtual face skincare helper. Here you will find a library of affordable, effective, and responsible skincare products, for any and all skin types.
                As you may well know, there is an abundance of skincare products in the market, making it more and more difficult to find what's right for your skin. 
                We know you cherrish your skin, and we do too! That is why we have high standards. If you are new here, go ahead and take our quiz to narrow your search. 
                Otherwise, browse our range of recommended products, and build your perfect routine. Good luck!</p> 
                <br/><br/>
                <Button variant="warning" href="/quiz" block>Take the Quiz</Button>
            </Jumbotron> 
        </Container>
    )
}

export default Welcome