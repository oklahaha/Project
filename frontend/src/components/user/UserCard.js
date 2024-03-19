import React, { Component, useEffect, useState } from 'react';
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

export default function UserCard() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('/user/list')
        .then(response => response.json())
        .then(data => setUsers(data))
    }, []);

    return (
        <div>
            {users.map(createCard)}
        </div>
    )
}