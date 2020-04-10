import React from 'react';
import {
    Switch,
    Route
} from 'react-router-dom';
import Splash from './splash/splash';
import Nav from './navbar/navbar';

const App = () => (
    <div className='page-container'>
        <Nav/>
        <Switch>
            <Route path='/' component={Splash} exact/>
        </Switch>
    </div>
)

export default App;