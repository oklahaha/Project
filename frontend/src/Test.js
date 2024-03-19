import React, { Component } from 'react';
import './css/App.css';

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

// const numbers = [3, 56, 2, 48, 5];

// const newNumbers = numbers.map(x => x * 2);
// const newNumbers = numbers.filter(x => x < 10);
// const newNumbers = numbers.reduce((accumulator, currentNumber) => accumulator + currentNumber);
// const newNumbers = numbers.find(x => x > 10);
// const newNumbers = numbers.findIndex(x => x > 10);

export default class Test extends Component {
  render() {
    return (
        <div>
            <Heading />
            <h2 >My favourite foods {doublePi()}</h2>
            <List />
        </div>
    )
  }
}