import React from 'react';
import {
    Switch,
    Route
} from 'react-router-dom';
import Splash from './splash/splash';

const App = () => (
    <div>
        <Switch>
            <Route path='/' component={Splash} exact/>
        </Switch>
    </div>
)

export default App;