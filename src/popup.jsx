import React from 'react';
import reactDom from 'react-dom';
import { INITIALIZE_CLIENT } from './lib/definitions';


class App extends React.Component {

  startApp() {
    chrome.runtime.sendMessage({ type: INITIALIZE_CLIENT }, response => {
      console.log(response);
    });
  }

  render() {
    return (
      <div className="container-fluid">
        <input type="button" onClick={this.startApp} value="start" />
      </div>
    )
  }
}

reactDom.render(
  <App />,
  document.getElementById('root')
)