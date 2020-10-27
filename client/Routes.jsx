import React, { memo } from 'react';
import {BrowserRouter as  Router, Route , Switch } from 'react-router-dom';
import Home from './components/Home';
import Search from './components/Search';
import { Provider } from 'react-redux';
import store from './store';
const Routes = () => {
    return (
        <Provider store = {store}> 
        <Router>
        <Switch>
            <Route exact path='/'><Home/></Route>
            <Route exact path='/search/:type/:key'><Search/></Route>
            
        </Switch>
        </Router>
        </Provider>
    );
};

export default Routes;