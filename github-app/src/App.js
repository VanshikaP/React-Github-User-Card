import React, {useState} from 'react';

import UserCard from './components/UserCard'
import UserForm from './components/UserForm'
import './App.css';

class App extends React.Component {
  state = {
    username: ''
  }
  updateUsername = user => {
    this.setState({
      username: user
    })
  }
  render() {
    return (
      <div className="App">
        <h1>My GitHub Profile</h1>
        <UserCard username={this.state.username}/>
        <UserForm updateUsername={this.updateUsername} />
      </div>
    );
  }
}

export default App;
