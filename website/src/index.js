import React from 'react';
import ReactDOM from 'react-dom';
import {Switch, Route, Redirect} from 'react-router-dom'
import * as serviceWorker from './javascript/serviceWorker';

import 'bootstrap/dist/css/bootstrap.min.css';
import './stylesheets/App.css'
import './stylesheets/index.css'

//include Components
import Dashboard from './javascript/pages/Dashboard';
import Settings from './javascript/pages/Settings';
import App from './App';

const PathManager = (props) => {
    const {mode, onSwitch} = props;
    return (<Switch>
        <Route exact path={"/"}>
            <Redirect to="/dashboard"/>
        </Route>
        <Route exact path={"/dashboard"} render={() =>
            <Dashboard mode={mode}
                       onSwitch={onSwitch}
            />
        }/>
        <Route exact path={"/settings"} render={() =>
            <Settings mode={mode}
                       onSwitch={onSwitch}
            />
        }/>
    </Switch>);

};

export default PathManager;


ReactDOM.render(<App/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
