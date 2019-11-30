import React from 'react';
import ReactDOM from 'react-dom';
import {Switch, Route} from 'react-router-dom'
import * as serviceWorker from './javascript/serviceWorker';


//include Components
import Dashboard from './javascript/pages/Dashboard';
import App from './App'

const PathManager = () => (
    <Switch>
        <Route exact path={"/dashboard"} component={Dashboard}/>
    </Switch>
);

export default PathManager;


ReactDOM.render(<App/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
