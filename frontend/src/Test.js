import React, { Component } from 'react';
import './App.css';
import AppNavbar from './AppNavbar';
import Footer from './Footer';

const apple = "Apple";
const banana = "Banana";
const orange = "Orange";


let string;

function Heading() {
    const time = new Date().getHours();
    const customStlye = {
        color: ""
    };

    if (time < 12) {
        string = "morning"
        customStlye.color = "red";
    } else if (time < 18) {
        string = "afternoon"
        customStlye.color = "green";
    } else {
        string = "night"
        customStlye.color = "blue";
    }

    return <h1 className="heading" style={customStlye}>Good {string}</h1>
}

function List() {
    return (         
        <ul>
            <li>{apple}</li>
            <li>{orange}</li>
            <li>{banana}</li>
        </ul>
    )
}

function doublePi() {
    const pi = 3.1415962;
    return pi * 2;
}

export default class Test extends Component {
  render() {
    return (
        <div>
            <AppNavbar/>
            <Heading />
            <h2 >My favourite foods {doublePi()}</h2>
            <List />
            <Footer />
        </div>
    )
  }
}