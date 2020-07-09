import React from 'react';


import TopNavBar from './components/TopNavBar';
import Welcome from './components/Welcome';
import Cleanse from './components/Cleanse';
import Treatement from './components/Treatement';
import Moisturize from './components/Moisturize';
import SunProtection from './components/SunProtection';
import Quiz from './components/Quiz';
import Routine from './components/Routine';
import Mistake from './components/Mistake';
import Footer from './components/Footer';


import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';

function App() {

  return (

    <div className = "App" >

      <BrowserRouter>

          <TopNavBar/>

          <Switch>
            <Route exact path='/welcome' component={Welcome}/>
            <Route exact path='/cleanse' component={Cleanse}/>
            <Route exact path='/treatment' component={Treatement}/>
            <Route exact path='/moisturize' component={Moisturize}/>
            <Route exact path='/sunprotection' component={SunProtection}/>
            <Route exact path='/quiz' component={Quiz}/>
            <Route exact path='/routine' component={Routine}/>
            <Route exact path='/mistake' component={Mistake}/>
            <Route render={() => <Redirect to="/mistake"/>} />
          </Switch>

      </BrowserRouter>

      <Footer />

    </div>

  );
}

export default App
