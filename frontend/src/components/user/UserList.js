import React, { Component, useEffect, useState } from 'react';
import { Container } from 'reactstrap';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Table from 'react-bootstrap/Table';

export default function UserList() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('/user/list')
        .then(response => response.json())
        .then(data => setUsers(data))
    }, []);

    const removeUser = async (userId) => {
        await fetch('/user/${userId}', {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        });
        console.log('Remove user with ID:', userId);

        let updatedUsers = users.filter(user => user.userId !== user.userId);
        setUsers(updatedUsers);
    }

    return (
        <div>
            <Container fluid>
                <h3>Users</h3>
                <Table className="mt-4">
                    <thead>
                        <tr>
                            <th width="20%">Name</th>
                            <th width="20%">Age</th>
                            <th width="20%">Tel</th>
                            <th width="20%">Email</th>
                            <th width="20%">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map(user => (
                            <tr key={user.userId}>
                                <td style={{whiteSpace: 'nowrap'}}>{user.userName}</td>
                                <td>{user.age}</td>
                                <td>{user.tel}</td>
                                <td>{user.email}</td>
                                <td>
                                    <ButtonGroup>
                                        <Button size="sm" variant="primary" tag={Link} to={"/user/" + user.userId}>Edit</Button>
                                        <Button size="sm" variant="danger" onClick={() => removeUser(user.userId)}>Delete</Button>
                                    </ButtonGroup>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
                <div className="float-right">
                    <Button variant="primary"><Link to="/user/add">Add User</Link></Button>
                </div>
            </Container>
        </div>
    );
}
