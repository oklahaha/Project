import React, { Component } from 'react';
import '../../css/styles.css';
import Card from 'react-bootstrap/Card';

function createCard(user) {
    return(
        <Card style={{ width: '18rem', height: '18rem'}} key={user.userId}> 
            <Card.Img variant="top" src={user.img } style={{width: '7rem', alignSelf: 'center'}} />
            <Card.Body>
                <Card.Title>User Name: {user.userName}</Card.Title>
                <Card.Text>Tel: {user.tel}</Card.Text>
                <Card.Text>Email: {user.email}</Card.Text>
            </Card.Body>
        </Card>
    )
}

export default class UserCard extends Component {

    constructor(props) {
        super(props);
        this.state = {users: []};
    }

    componentDidMount() {
        fetch('/user/list')
            .then(response => response.json())
            .then(data => this.setState({users: data}));
    }

    render() {
        
        const {users, isLoading} = this.state;

        if (isLoading) {
            return <p>Loading...</p>;
        }

        return (
            <div>
                {users.map(createCard)}
            </div>
        )
    }
}