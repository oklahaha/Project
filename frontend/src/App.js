import React, { Component } from 'react';
import './css/App.css';
import Home from './components/common/Home';
import { BrowserRouter as Router, Routes ,Route } from 'react-router-dom';
import UserList from "./components/user/UserList";
import UserEdit from "./components/user/UserEdit";
import UserCard from "./components/user/UserCard";
import Test from "./Test";
import AppNavbar from "./components/common/AppNavbar";
import Footer from "./components/common/Footer";
import Login from "./components/login/Login";

class App extends Component {
  render() {
    return (
        <Router>
          <AppNavbar />
          <Routes>
            <Route path='/' element={ <Home/ >}/>
            <Route path='/user/list' element={ <UserList/ >}/>
            <Route path='/user/:id' element={ <UserEdit/ >}/>
            <Route path='/user/card' element={ <UserCard/ >}/>
            <Route path='/test' element={ <Test/ >}/>
            <Route path='/login' element={ <Login/ >}/>
          </Routes>
          <Footer />
        </Router>
    )
  }
}

export default App;