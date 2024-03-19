import React, {useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {ButtonGroup, Button} from 'react-bootstrap';
import './css/App.css';

export default function Test2() {

    const [count, setCount] = useState(0);

    const increase = () => setCount(count + 1);

    const decrease = () => setCount(count - 1);

    const [time, setTime] = useState(new Date().toLocaleTimeString());

    const updateTime = () => setTime(new Date().toLocaleTimeString());

    setInterval(updateTime, 1000)
    
    return (
        <div>
            <h1>{count}</h1>
            <ButtonGroup>
                <Button variant="primary" onClick={increase}>+</Button>
                <Button variant="danger" onClick={decrease}>-</Button>
            </ButtonGroup>
            <h1>{time}</h1>
            <Button variant="primary" onClick={updateTime}>Get Time</Button>
        </div>
    )
}
