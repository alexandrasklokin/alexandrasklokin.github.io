import React,{Component} from 'react';
import {Container,Jumbotron, CardColumns} from 'react-bootstrap'
import Sparkle from "../img/sparkle.jpg";
import TreatementCards from "./Cards";

class Treatement extends Component {
    state = {
        treatements : [
            {
                id:5, 
                type: 2, 
                brand: 'The Ordinary.',
                name: 'Glycolic Acid Toning Solution',
                description: 'pH -3.6. Use idealy in the PM, no more frequently than one per day.',
                skintype: ['oily','combination'],
                concerns: ['pores','oil','blackheads','acne'],
                ingredients: ['glycolic acid']
            },
            {
                id:6,
                type: 2, 
                brand: 'Clean&Clear',
                name: 'Blackhead Clearing Astringent',
                description: 'Helps treat and prevent blackheads.',
                skintype: ['oily','combination','sensitive'],
                concerns: ['pores','oil','blackheads','acne'],
                ingredients: ['salicylic acid']
            },
            {
                id:7,
                type: 2, 
                brand: 'The Ordinary.',
                name: 'Buffet Serum',
                description: 'Multi Technology Peptide Serum',
                skintype: ['combination','oily','dry','sensitive'],
                concerns: ['ageing','wrinkles','fine lines'],
                ingredients: ['peptides']
            },
            {
                id: 8,
                type: 2, 
                brand: "CeraVe",
                name: "Renewing SA Cream",
                description: 'Helps to prevent and reduce the recurrence of dry, itchy, red, and flaking skin.',
                skintype: ['dry','normal','sensitive','oily'],
                concerns: ['dryness','acne','redness','dark_circles'],
                ingredients: ['salicylic acid','niacinamide','ceramides','vitamin D']
            },
            {
                id: 9,
                type: 2, 
                brand: "The Ordinary.",
                name: "Caffeine Solution + EGCG",
                description: 'Reduces appearance of eye contour pigmentation and of puffiness',
                skintype: ['dry','normal','sensitive','oily'],
                concerns: ['dark_circles'],
                ingredients: ['caffeine','EGCG']
            },
            {
                id: 10,
                type: 2, 
                brand: "The Ordinary.",
                name: "Retinol in Squalane",
                description: 'Highly-stable, water fraa, solution of pure retinol.',
                skintype: ['dry','normal','oily'],
                concerns: ['hyperpigmentation','dark_circles', 'redness','wrinkles','ageing','fine_lines'],
                ingredients: ['retinol','squalane']
            }
        ]
    }
    render() {
        return (
            <Container key={Math.random}>
            <br/><br/>
                <Jumbotron>
                    <h1><img src={Sparkle} alt="Logo"/> Treatment</h1>
                    <p>If we treat our skin nicely, it'll treat us nicely back. We can use serums, creams, acids, and so much more to fix, and prevent 
                    certain skin issues. Everyone's skin is different, so we all have different skin concerns we'd like to fix. We believe that 
                    good ingredients are the fundamental driving force for success, which is why you should always check the active ingredients of your
                    skincare products, to decide if this will address your skin concerns. 
                    </p> 
                </Jumbotron> 

                <Jumbotron>
                    <CardColumns>
                        <TreatementCards products={this.state.treatements} />
                    </CardColumns>
                    
                </Jumbotron> 

            </Container>
        )
    }
}

export default Treatement