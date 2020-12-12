import React from 'react';
import { Switch, Route } from 'react-router-dom';
import LandingPage from './landingpage';


const Main = () => {
    <switch>
        <Route exact path="/" component={LandingPage} />
    </switch>
}
export default Main; 
