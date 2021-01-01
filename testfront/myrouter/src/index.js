import React from 'react';
import ReactDOM from 'react-dom';
import {Route,Switch,BrowserRouter as Router} from 'react-router-dom'
import './index.css';
import App from './App';
import user from "./user"
import visit from "./visit"
import notfound from "./visit"


const routing=(
  <Router>
    <Switch>
    <Route path="/" component={App}/>
    <Route path="/user" component={user}/>
    <Route path="/visit" component={visit}/>
    <Route component={notfound}/>
    </Switch>
  </Router>
);


ReactDOM.render(
routing,
  document.getElementById('root')
);
