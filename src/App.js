import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Contact from './components/pages/Contact'
import Read from './components/pages/Read'
import Write from './components/pages/Write'
import SignUp from './components/pages/SignUp'
import home from './components/pages/Home';
import Edit from './components/pages/Edit';

class App extends Component{

render() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={home}/>
        <Route path='/contact' exact component={Contact}/>
        <Route path='/read' exact component={Read}/>
        <Route path='/write' exact component={Write}/>
        <Route path='/signup' exact component={SignUp}/>
        <Route path='/edit/:id' exact component={Edit}/>
      </Switch>
    </Router>
    );
  }
}
export default App;
