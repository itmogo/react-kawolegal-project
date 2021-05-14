import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Startups from './pages/Startups';
import Register from './pages/Register';
import Login from './pages/Login';

function Router() {
    return (
        <div>

            <BrowserRouter>
                <Switch>

                    <Route  exact path='/' component={Home} />
                    <Route  exact path='/startups' component={Startups} />
                    <Route  exact path='/register' component={Register} />
                    <Route  exact path='/login' component={Login} />
                </Switch>           
            
            </BrowserRouter>
            
        </div>
    )
}

export default Router;
