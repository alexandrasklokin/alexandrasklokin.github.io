import React,{Component} from 'react';
import {Container,Jumbotron,CardColumns} from 'react-bootstrap'
import Res from "../img/results.jpg";

import ResultsCards from "./IngredientCards";

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    //console.log("hello");
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) === ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) === 0) {
        return c.substring(name.length, c.length);
      }
    }
    return null;
  }


class Results extends Component {
    state = {
        ingredients : [
            {
                id:100, 
                name: 'Glycerin',
                description: 'Common ingredient in gentle cleansers. Non stripping.',
                skintype: ['dry','oily','combination','sensitive'],
                concerns: ['pores','oil','acne','dryness'],
            },
            {
                id:101,
                name: 'Squalane',
                description: 'Oil ingredient made from sugar canes. Excellent hydrator.',
                skintype: ['dry','combination','sensitive'],
                concerns: ['dryness'],
            },
            {
                id:102,
                name: 'Hemi-Squalane',
                description: 'Oil ingredient made from sugar canes. Excellent hydrator. More lightweight than Squalane.',
                skintype: ['dry','combination','sensitive'],
                concerns: ['dryness','redness'],
            },
            {
                id:103,
                name: 'Glycolic Acid',
                description: 'AHA acids goes deep into pores, to push out impurities. Rough exfoliation. Should be used with sun screen.',
                skintype: ['oily','sensitive'],
                concerns: ['pores','oil','acne','blackheads'],
            },
            {
                id:104,
                name: 'Salicylic Acid',
                description: 'BHA acids goes deep into pores, to push out impurities. Gentle exfoliant.',
                skintype: ['oily','sensitive','combination'],
                concerns: ['pores','oil','acne','blackheads','redness','dryness'],
            },
            {
                id:105,
                name: 'Retinol',
                description: 'Converted, by our bodies, into retinoic acid, for skin reguvination.',
                skintype: ['combination','dry'],
                concerns: ['hyperpigmentation','dark_circles', 'redness','wrinkles','ageing','fine_lines'],
            },
            {
                id:106,
                name: 'Mineral Sunscreen',
                description: 'Better alternative to chemical sunscreen. Should be used every single day.',
                skintype: ['oily','combination','dry','sensitive'],
                concerns: ['sun'],
            }
        ]
    }

    filteredIngredients = () => {

        var input = getCookie('quiz');
        var inputs = input.split(',');
        
        var filter = [];

        if (inputs[0]==='oily') {
            filter.push(this.state.ingredients[0]);
            filter.push(this.state.ingredients[3]);
            filter.push(this.state.ingredients[4]);
            filter.push(this.state.ingredients[6]);
        }
        else if (inputs[0]==='combination') {
            filter.push(this.state.ingredients[0]);
            filter.push(this.state.ingredients[1]);
            filter.push(this.state.ingredients[2]);
            filter.push(this.state.ingredients[4]);
            filter.push(this.state.ingredients[5]);
            filter.push(this.state.ingredients[6]);
        }
        else if (inputs[0]==='dry') {
            filter.push(this.state.ingredients[0]);
            filter.push(this.state.ingredients[1]);
            filter.push(this.state.ingredients[2]);
            filter.push(this.state.ingredients[5]);
        }
        else if (inputs[0]==='sensitive') {
            filter.push(this.state.ingredients[0]);
            filter.push(this.state.ingredients[1]);
            filter.push(this.state.ingredients[2]);
            filter.push(this.state.ingredients[3]);
            filter.push(this.state.ingredients[4]);
            filter.push(this.state.ingredients[6]);
        }


        return filter;

    }

    render() {
        var list = this.filteredIngredients();

            return (
            <Container key={Math.random}>
            <br/><br/>

                <Jumbotron>
                    <h1><img src={Res} alt="Result"/> Results</h1>
                    <p>Once you've filled out our quiz, get to know some of the ingredients we recommend. Look for these ingredients in different products 
                    to perfect your skin care routine.</p>
                </Jumbotron> 

                <Jumbotron>
                    <CardColumns>
                        <ResultsCards products={list} />
                    </CardColumns>
                </Jumbotron> 

                
            </Container>
        )
    }
}

export default Results