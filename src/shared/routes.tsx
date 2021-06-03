import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'
import Checkout from '../components/checkout'
import Home from '../components/Home/Home'
const Routes = (HeaderComponent: any) => (
    class extends React.Component {
        render() {
            return (<Router>
                
                        <HeaderComponent></HeaderComponent>
                        <Switch>
                            <Route exact path="/">
                                <Home />
                            </Route>
                            <Route path="/checkout">
                                <Checkout></Checkout>
                            </Route>
                        </Switch>
                  
            </Router>)
        }
    }

);

export default Routes;