import React, {Component} from 'react';
import {BrowserRouter} from 'react-router-dom'
import PathManager from './index'

class App extends Component{

  constructor(props) {
    super(props);

    this.state = {
      mode : false
    };

    this.handleSwitchDisplayMode = this.handleSwitchDisplayMode.bind(this);
  }

  handleSwitchDisplayMode() {
    this.setState({ mode : !this.state.mode });
  }

  handleRefresh() {
    console.log('on refresh');
  }

  render() {
    return (
        <BrowserRouter>
          <PathManager mode={this.state.mode} onSwitch={this.handleSwitchDisplayMode} onRefresh={this.handleRefresh}/>
        </BrowserRouter>
    ); 
  }
}

export default App;
