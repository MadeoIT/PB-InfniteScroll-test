import React from 'react';
import Dashboard from './Component/Dashboard';
import Main from "./Component/Main/Main";

class App extends React.Component {
  render() {
    return (
      <Main>
        <Dashboard />
      </Main>
    );
  }
}

export default App;
