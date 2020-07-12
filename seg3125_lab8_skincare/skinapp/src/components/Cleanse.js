import React,{Component} from 'react';
import {Container,Jumbotron,CardColumns} from 'react-bootstrap'
import Sponge from "../img/sponge.jpg";
import CleanserCards from "./Cards";

class Cleanse extends Component {
    state = {
        cleansers : [
            {
                id:1, 
                type: 1,
                brand: 'Garnier SkinActive',
                name: 'Miscellar Water',
                description: 'Removes makeup + cleanswer + soothes, no rinsing',
                skintype: ['dry','oily','combination','sensitive'],
                concerns: ['pores','oil'],
                ingredients: ['glycol','glycerin']
            },
            {
                id:2,
                type: 1,
                brand: 'Nivea',
                name: 'MiscellAir',
                description: 'Make-up removed for dry skin, dermatologist tested. Easy to apply, safe for sensitive skin, and leaves no product residue behind.',
                skintype: ['dry','oily','combination','sensitive'],
                concerns: ['dryness'],
                ingredients: ['glycol','glycerin']
            },
            {
                id:3,
                type: 1,
                brand: 'Cetaphil',
                name: 'Oily Skin Cleanser',
                description: 'Foaming action removes excess oil.',
                skintype: ['combination','oily'],
                concerns: ['acne','oil','pores'],
                ingredients: ['glyceryl','glycol','glycerin']
            },
            {
                id: 4,
                type: 1,
                brand: "The Ordinary.",
                name: "Squalane Cleanser",
                description: 'Squalane based face cleanser and makeup remover.',
                skintype: ['dry','normal','sensitive'],
                concerns: ['dryness'],
                ingredients: ['squalane','glycerin']
            }
        ]
    }
    render() {
        return (
            <Container key={Math.random}>
            <br/><br/>
                <Jumbotron>
                    <h1><img src={Sponge} alt="Logo"/> Cleanse</h1>
                    <p>Cleansing is one of the most important steps of any skincare routine.
                    Good cleansers remove impurities from your pores, leave skin healthier and cleaner, without
                    overly stripping the natural oils from your skin. Cleansers remove impurities, germs, dirt, and makeup
                    that can irritate the skin. Cleansers should be used twice a day, in the morning and at night.
                    </p> 
                </Jumbotron> 

                <Jumbotron>
                    <CardColumns>
                        <CleanserCards products={this.state.cleansers} />
                    </CardColumns>
                </Jumbotron> 

            </Container>
        )
    }
}

export default Cleanse