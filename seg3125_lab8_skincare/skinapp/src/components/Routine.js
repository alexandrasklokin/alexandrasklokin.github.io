import React,{Component} from 'react';
import {Container,Jumbotron,CardColumns} from 'react-bootstrap'
import Day from "../img/sun.jpg";
import Night from "../img/nightRoutine.jpg";

import DayCards from "./RoutineCards";
import NightCards from "./RoutineCards";

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

class Routine extends Component {
    constructor(props){
        super(props);
        this.state = {
            dayRoutine: [],
            nightRoutine: []
        }
    }

    buildNightRoutine() {

        let nightRoutine = []

        for (var i = 1; i < 17; i++) {
            
            var nightProduct = JSON.parse(getCookie('nightProduct'+i));
            
            if (nightProduct != null) {
                nightRoutine.push(nightProduct);
            }
        }

        return nightRoutine;
    }

    buildDayRoutine() {

        let dayRoutine = []

        for (var i = 1; i < 17; i++) {
            
            var dayProduct = JSON.parse(getCookie('dayProduct'+i));
            
            if (dayProduct != null) {
                dayRoutine.push(dayProduct);
            }
        }

        return dayRoutine;
    }

    componentDidMount(){
        let nD = this.buildDayRoutine();
        let nR = this.buildNightRoutine();
        //console.log(nD);
        //console.log(nR);
        this.setState({
            dayRoutine: nD,
            nightRoutine: nR
        })
    }

    render() {
            console.log(this.state);
            return (
            <Container key={Math.random}>
            <br/><br/>
                <Jumbotron>
                    <h1><img src={Day} alt="Day Routine"/> Day Routine</h1>
                    <p> Good morning! As part of your morning, you should leave around 5 minutes to take care of your skin. Begin by cleansing, and moisturizing.
                    Sun protection is vital! Make sure you've included that as one of your steps.</p>
                </Jumbotron> 

                <Jumbotron>
                    <CardColumns>
                        <DayCards products={this.state.dayRoutine} time="day" />
                    </CardColumns>

                </Jumbotron> 

                <Jumbotron>
                    <h1><img src={Night} alt="Night Routine"/> Night Routine</h1>
                    <p> Zzzz.... You may be sleepy now, but remember: night time is your chance to fix/prevent any of your skin care concerns. While you relax,
                    your body will be going through regenerative processes, and your products should be there to help. 
                    This is the time to try out different treatements. Make sure to moisturize too.</p>
                </Jumbotron> 

                <Jumbotron>
                    <CardColumns>
                        <NightCards products={this.state.nightRoutine} time="night" />
                    </CardColumns>

                </Jumbotron> 

            </Container>
        )
    }
}

export default Routine