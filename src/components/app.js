import React from 'react';
import {
    Switch,
    Route
} from 'react-router-dom';
import Splash from './splash/splash';
import Nav from './navbar/navbar';
import Sidebar from './navbar/sidebar';
import { SignUpForm } from '../components/session/registration'
import { LoginForm } from '../components/session/login'
import { RentalIndex } from '../components/product/products_index'

const App = () => (
    <div className='page-container'>
        <Nav/>
        <Sidebar/>
        <Switch>
            <Route path='/' component={Splash} exact/>
            <Route path='/signup' component={SignUpForm}/>
            <Route path='/login' component={LoginForm}/>
            <Route path='/rentals' component={RentalIndex} exact/>
            <Route path='/rentals/smallarms' component={RentalIndex} exact/>
        </Switch>
        
    </div>
)

export default App;