import React, { Component } from 'react';
import '../../css/App.css';
import { Link } from 'react-router-dom';
import { Button, Container } from 'reactstrap';

class Home extends Component {
    render() {
        return(
            <div>
                <Container fluid>
                    <Button color="link"><Link to="/user">User</Link></Button>
                    <Button color="link"><Link to="/test">Test</Link></Button>
                </Container>
            </div>
        )
    };
}
export default Home;