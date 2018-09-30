//@flow
import * as React from 'react';
import Dashboard from './Component/Dashboard';
import Main from "./Component/Main/Main";

type Props = {}

class App extends React.Component<Props> {
  render() {
    return (
      <Main>
        <Dashboard />
      </Main>
    );
  }
}

export default App;
