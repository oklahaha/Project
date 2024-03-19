import React, { Component } from 'react';
import './css/App.css';
import Home from './components/common/Home';
import { BrowserRouter as Router, Routes ,Route } from 'react-router-dom';
import UserList from "./components/user/UserList";
import UserEdit from "./components/user/UserEdit";
import UserAdd from "./components/user/UserAdd";
import UserCard from "./components/user/UserCard";
import Test from "./Test";
import Test2 from "./Test2";
import AppNavbar from "./components/common/AppNavbar";
import Footer from "./components/common/Footer";
import Login from "./components/login/Login";

export default function App() {
  return (
      <Router>
        <AppNavbar />
        <Routes>
          <Route path='/' element={ <Home/ >}/>
          <Route path='/user/list' element={ <UserList/ >}/>
          <Route path='/user/add' element={ <UserAdd/ >}/>
          <Route path='/user/:id' element={ <UserEdit/ >}/>
          <Route path='/user/card' element={ <UserCard/ >}/>
          <Route path='/test' element={ <Test/ >}/>
          <Route path='/test2' element={ <Test2/ >}/>
          <Route path='/login' element={ <Login/ >}/>
        </Routes>
        <Footer />
      </Router>
  )
}
