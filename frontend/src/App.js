import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  state = {
    users: []
  };

  async componentDidMount() {
    const response = await fetch('/user/list');
    const body = await response.json();
    this.setState({users: body});
  }

  render() {
    const {users} = this.state;
    return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <div className="App-intro">
              <h2>User</h2>
              {users.map(user =>
                  <div key={user.userUd}>
                    {user.userName} ({user.email})
                  </div>
              )}
            </div>
          </header>
        </div>
    );
  }
}
export default App;
