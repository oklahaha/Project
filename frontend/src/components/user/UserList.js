import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Table from 'react-bootstrap/Table';

class UserList extends Component {

    constructor(props) {
        super(props);
        this.state = {users: []};
        this.remove = this.remove.bind(this);
    }

    componentDidMount() {
        fetch('/user/list')
            .then(response => response.json())
            .then(data => this.setState({users: data}));
    }

    async remove(id) {
        await fetch(`/user/${id}`, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }).then(() => {
            let updatedUser = [...this.state.users].filter(i => i.id !== id);
            this.setState({users: updatedUser});
        });
    }
    
    render() {
        const {users, isLoading} = this.state;
    
        if (isLoading) {
            return <p>Loading...</p>;
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
                                            <Button size="sm" variant="danger" onClick={() => this.remove(user.userId)}>Delete</Button>
                                        </ButtonGroup>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                    <div className="float-right">
                        <Button color="success" tag={Link} to="/user/new">Add User</Button>
                    </div>
                </Container>
            </div>
        );
    }
}
export default UserList;

