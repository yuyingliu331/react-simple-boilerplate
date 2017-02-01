// Application entrypoint.

// Load up the application styles
require("../styles/application.scss");

// Render the top-level React component
import React from 'react';
import ReactDOM from 'react-dom';

import Home from './components/Home.js';
import SignUp from './components/SignUp.js';
import { Router, Route, IndexRoute, hashHistory } from "react-router";

const app = document.getElementById('react-root');

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={ Home }></Route>
        <Route path="signup" component={ SignUp }></Route>

    </Router>,
    app);
