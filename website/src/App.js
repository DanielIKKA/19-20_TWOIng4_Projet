import React, {Component} from 'react';
import {BrowserRouter} from 'react-router-dom'
import PathManager from './index'

class App extends Component{
  render() {
    return (
      <div id={'main-wrapper'}>
        <BrowserRouter>
          <PathManager/>
        </BrowserRouter>,
      </div>
    ); 
  }
}

export default App;
