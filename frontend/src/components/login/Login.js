import React, { Component } from 'react';
import {Form, Row, Col, Button} from 'react-bootstrap';

var isLoggedIn = false;

function CheckLogin() {
    return <Form>
        <Form.Group as={Row} className="mb-3" controlId="formPlaintextUserName">
            <Form.Label column sm="2">
                UserName
            </Form.Label>
            <Col sm="10">
                <Form.Control type="text" placeholder="UserName" />
            </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
            <Form.Label column sm="2">
                Password
            </Form.Label>
            <Col sm="10">
                <Form.Control type="password" placeholder="Password" />
            </Col>
        </Form.Group>
        <Form.Group>
            <Button className="submit-button" value="submit" type="submit">Submit</Button>
        </Form.Group>
    </Form>
}

export default class Login extends Component {
    render() {
        return(
            <div>
                {isLoggedIn ? <h1>Hello</h1> : <CheckLogin />}
            </div>
        )
    }
}