import React from 'react';
import { Switch, Route } from 'react-router-dom'
import App from '../App';
import Checkout from '../components/checkout'
const Routes = () => (
    <div>
        <main>
            <Switch>
                <Route exact path="/" component={App} />
                <Route exact path="/checkout" component={Checkout} />
            </Switch>
        </main>
    </div>
);

export default Routes;