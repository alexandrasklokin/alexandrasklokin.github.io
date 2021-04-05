import React from 'react'
import {Container,Jumbotron,Button} from 'react-bootstrap'

const Bienvenue = () => {
    return (
        <Container key={Math.random}>
        <br/><br/>
            <Jumbotron>
                <h1>Bienvenue à <i>ExpertPeau</i>,</h1>
                <br/>
                <p>votre assistant de soin de visage virtuel. Vous trouverez ici une bibliothèque de produits de soins de la peau abordables, efficaces et responsables, pour tous les types de peau.
                Comme vous le savez peut-être, il existe une abondance de produits de soin sur le marché, ce qui rend de plus en plus difficile de trouver ce qui convient à votre peau.
                Nous savons que vous chérissez votre peau, et nous aussi! C'est pourquoi nous avons des normes élevées. Si vous êtes nouveau ici, allez-y et répondez à notre quiz pour affiner votre recherche.
                Sinon, parcourez notre gamme de produits recommandés et construisez votre routine parfaite. Bonne chance!</p> 
                <br/>
                <Button variant="warning" href="/quiz" block>Fais le Quiz</Button>
            </Jumbotron> 
        </Container>
    )
}

export default Bienvenue