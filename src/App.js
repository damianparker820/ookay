import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Pic from './Atwork.jpg'
import Logo from './logo.svg'
import AppS from './components/login'
import AppSS from './components/yellow'
import Landing from './components/landing'
import Out from './components/outlook'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
export default function App() {
  
  return (
    <div >
      <Router>
      <Route path='/' exact component={AppSS}/>
        <Route path='/home' exact component={AppS}/>
        <Route path='/authorised' component={Landing}/>
        <Route path='/mail-west' component={Out}/>
    
     </Router>
    </div>
  );
  }