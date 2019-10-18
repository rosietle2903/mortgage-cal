import React from 'react';
import './App.css';
import Form from './Form.js'
import Post from './Post' 
import Nav from './Nav.js'
import Home from './Home.js'
import { directive } from '@babel/types';
import {Bar} from 'react-chartjs-2';
import Chart from '/Users/rosiele/Documents/mortage-cal/src/components/Chart.js'
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'; 

function App() {
  return (
    <Router> 
      <Switch> 
    <div>
      <Nav />
       <Route path="/" exact component={Home} /> 
       <Route path="/calculate" component={Form} /> 
       <Route path="/post" component={Post}/> 
    </div>
    </Switch>
    </Router>
  );
}

export default App;
