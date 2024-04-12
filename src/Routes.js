import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// Fix import paths according to your project structure
import DPA from './pages/DPA'; // Adjust if DPA is a default export
import Emails from './pages/Emails';
const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route path="/dpa">
                    <DPA />
                </Route>
                <Route path="/emails">
                    <Emails />
                </Route>
                <Route path="/fandango">
                    <Fandango />
                </Route>
                {/* You can add a default route or redirect if you like */}
                {/* <Route path="/">
                    <HomePage />
                </Route> */}
            </Switch>
        </Router>
    );
}

export default Routes;
