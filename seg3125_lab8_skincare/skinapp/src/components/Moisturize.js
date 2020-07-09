import React,{Component} from 'react';
import {Container,Jumbotron, CardColumns} from 'react-bootstrap'
import Water from "../img/water.jpg";
import MoisturizeCards from "./Cards";

class Moisturize extends Component {
    state = {
        moisturizers : [
            {
                id:11, 
                brand: 'The Ordinary.',
                name: '100% Plant-Derived Hemi-Squalane',
                description: 'Pure Hemi Squalane.',
                skintype: ['dry','sensitive'],
                concerns: ['dryness'],
                ingredients: ['hemi-squalane']
            },
            {
                id:12,
                brand: 'Cetaphil',
                name: 'Moisturizing Lotion',
                description: 'All skin types; 48 hour hydration; face and body.',
                skintype: ['dry','oily','combination','sensitive'],
                concerns: ['dryness'],
                ingredients: ['glycerin','avocado oil']
            },
            {
                id:13,
                brand: 'The Ordinary.',
                name: 'Natural Moisturizing Factors + HA',
                description: 'Surface hydration formula.',
                skintype: ['combination','oily','dry','sensitive'],
                concerns: ['dryness'],
                ingredients: ['NMF','hyaluronic acid']
            },
            {
                id: 14,
                brand: "The Ordinary.",
                name: "Hyaluronic Acid 2% + B5",
                description: 'A hydration support formula with ultra-purse vegan hyaluronic acid.',
                skintype: ['dry','normal','sensitive','oily'],
                concerns: ['dryness'],
                ingredients: ['hyaluronic acid','vitamin B5']
            }
        ]
    }
    render() {
        return (
            <Container>
            <br/><br/>
                <Jumbotron>
                    <h1><img src={Water} alt="Logo"/> Moisturize</h1>
                    <p>Our skin's natural moisture barrier is SO important. It is what keeps the good stuff in, and the bad stuff out. 
                    Making sure to never overly strip the skin, and the moisturize after harsher treatements, will keep this barrier strong and fighting. 
                    Moisturizing doesn't have to be oily and heavy. Whether you have dry, normal, or oily skin, anyone can find their perfect moisturizer.
                    </p> 
                </Jumbotron> 

                <Jumbotron>
                <CardColumns>
                        <MoisturizeCards products={this.state.moisturizers} />
                    </CardColumns>
                    
                </Jumbotron> 

            </Container>
        )
    }
}

export default Moisturize