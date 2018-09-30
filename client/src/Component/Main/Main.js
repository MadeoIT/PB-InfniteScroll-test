import React, {Component} from 'react';
const version = 'v1'
const MainView = require(`./${version}/MainView`).default;

class Main extends Component {
  render() {
    return (
      <MainView>
        {this.props.children}
      </MainView>
    );
  }
}

export default Main;
