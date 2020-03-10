import React from 'react';

import UserCard from './components/UserCard'
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <UserCard />
      </div>
    );
  }
}

export default App;
