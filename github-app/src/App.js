import React from 'react';

import UserCard from './components/UserCard'
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>Hello</h1>
        <p>Are you still working?</p>
        <UserCard />
      </div>
    );
  }
}

export default App;
