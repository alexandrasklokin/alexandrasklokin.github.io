import React from 'react'
import {Card} from 'react-bootstrap'

import Img1 from "../img/100.jpg"
import Img2 from "../img/101.jpg"
import Img3 from "../img/102.jpg"
import Img4 from "../img/103.jpg"
import Img5 from "../img/104.jpg"
import Img6 from "../img/105.jpg"
import Img7 from "../img/106.jpg"


function getImage (id) {
    switch (id) {
        case 100: return Img1;
        case 101: return Img2;
        case 102: return Img3;
        case 103: return Img4;
        case 104: return Img5;
        case 105: return Img6;
        case 106: return Img7;
        default: break;
      }
}

const Cards = ({products}) => {

    const productsCards = products.length ? (
        products.map (product => {
            return (
                <Card border="warning" style={{ width: '100%' }} key={product.id}>

                    <Card.Img variant="top" src={getImage(product.id)} />
                    <Card.Header>
                        <Card.Title>{product.name}</Card.Title>
                    </Card.Header>
                    <Card.Body variant="pull-right px-2">
                        <Card.Text>
                            <b>Description: </b> {product.description}<br/>
                        </Card.Text>
                        <Card.Text>
                            <b>Skin Types: </b> {product.skintype.join(', ')}<br/>
                            <b>Concerns: </b> {product.concerns.join(', ')}<br/>
                        </Card.Text>
                    </Card.Body>
                </Card> 
            )
        })
    ) : (
        <p className="center">No ingredients match your quiz results. Sorry.</p>
    );

    return (
        <div className="products" key={Math.random}>
            {productsCards}
        </div>
    )
}

export default Cards