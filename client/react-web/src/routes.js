import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import Home from './pages/Home'
import Register from './pages/Register'

export default function Routes(){
    return(
        <BrowserRouter>
            <Route component={Home} path="/" exact />
            <Route component={Register} path="/register" exact />
        </BrowserRouter>
    )
}