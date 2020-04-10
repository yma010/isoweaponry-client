import React from 'react';
import {
    Switch,
    Route
} from 'react-router-dom';
import Splash from './splash/splash';
import Nav from './navbar/navbar';
import Sidebar from './navbar/sidebar';

const App = () => (
    <div className='page-container'>
        <Nav/>
        <Sidebar/>
        <Switch>
            <Route path='/' component={Splash} exact/>
        </Switch>
    </div>
)

export default App;