import React from 'react';

import UserCard from './components/UserCard'
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>My GitHub Profile</h1>
        <UserCard />
      </div>
    );
  }
}

export default App;
