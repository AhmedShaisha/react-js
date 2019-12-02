import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Home from './Home';
import * as serviceWorker from './serviceWorker';
import { Route, BrowserRouter as Router } from 'react-router-dom'
import Login from "./Login";

// ReactDOM.render(<App />, document.getElementById('root'));
const routing = (
    <Router>
        <div>
             <Route path="/" component={props => <App {...props} />} />
             <Route path="/Login" component={props => <Login {...props} />} />
             <Route path="/Home" component={props => <Home {...props} />} />
        </div>
    </Router>
);
ReactDOM.render(routing, document.getElementById('root'));
serviceWorker.unregister();
