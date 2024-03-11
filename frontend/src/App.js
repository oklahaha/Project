import React, { Component } from 'react';
import './App.css';
import Home from './Home';
import { BrowserRouter as Router, Routes ,Route } from 'react-router-dom';
import UserList from "./UserList";
import UserEdit from "./UserEdit";
import Test from "./Test";

class App extends Component {
  render() {
    return (
        <Router>
          <Routes>
            <Route path='/' element={ <Home/ >}/>
            <Route path='/user' element={ <UserList/ >}/>
            <Route path='/user/:id' element={ <UserEdit/ >}/>
            <Route path='/test' element={ <Test/ >}/>
          </Routes>
        </Router>
    )
  }
}

export default App;