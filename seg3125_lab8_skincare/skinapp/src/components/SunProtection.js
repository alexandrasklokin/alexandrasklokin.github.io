import React,{Component} from 'react';
import {Container,Jumbotron,CardColumns} from 'react-bootstrap'
import Sun from "../img/sun.jpg";
import SunCards from "./Cards.js";

class SunProtection extends Component {
    state = {
        sunProtection : [
            {
                id:15, 
                brand: 'The Ordinary.',
                name: 'Mineral UV Filters SPF 30 with Antioxidants',
                description: 'Broad spectrum SPF 30 mineral sunscreen with UVA/UVB protection.',
                skintype: ['dry','sensitive','oily','combination'],
                concerns: ['sun'],
                ingredients: ['minerals']
            },
            {
                id:16,
                brand: 'Life Brand',
                name: 'Sunscreen Face Lotion SPF 30',
                description: 'Moisturizing chemical sunscreen, with broad spectrum UVA and UVB. Will not cause breakouts. Oily free',
                skintype: ['dry','oily','combination'],
                concerns: ['sun'],
                ingredients: []
            }
        ]
    }
    render() {
        return (
            <Container>
            <br/><br/>
                <Jumbotron>
                    <h1><img src={Sun} alt="Logo"/> Sun Protection</h1>
                    <p>Most skin related concerns you may have could be directly linked to sun exposure. Unprotected, direct sun exposure causes the ageing of skin, breakouts, 
                    dark spots, and disrupts the skin's moisture barrier. This is why it's important to wear sunscreen everyday, whether you stay inside, or go outside. There are 
                    mineral, and chemical sunscreens, decide which suits your face better. 
                    </p> 
                </Jumbotron>

                <Jumbotron>
                    <CardColumns>
                        <SunCards products={this.state.sunProtection} />
                    </CardColumns> 
                    
                </Jumbotron> 

            </Container>
        )
    }
}

export default SunProtection