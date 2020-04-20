import React from 'react';
import {
    Switch,
    Route
} from 'react-router-dom';
import Splash from './splash/splash';
import Nav from './navbar/navbar';
import Sidebar from './navbar/sidebar';
import { SignUpForm } from '../components/session/registration'

const App = () => (
    <div className='page-container'>
        <Nav/>
        <Sidebar/>
        <Switch>
            <Route path='/' component={Splash} exact/>
            <Route path='/signup' component={SignUpForm}/>
        </Switch>
    </div>
)

export default App;