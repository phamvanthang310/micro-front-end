import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import './App.css';

export class App extends Component {
  render() {
    return (
      <div className="jumbotron">
        <div className="container">
          <h1 className="display-3">Hello, world!</h1>
          <p>This is a template for a simple marketing or informational website. It includes a large callout called a
            jumbotron and three supporting pieces of content. Use it as a starting point to create something more
            unique.</p>
          <p><a className="btn btn-primary btn-lg" href="#" role="button">Learn more »</a></p>
        </div>
      </div>
    );
  }
}

class ReactFragment extends HTMLElement {
  mountPoint;

  connectedCallback() {
    this.mountPoint = document.createElement('span');
    this.appendChild(this.mountPoint);

    ReactDOM.render(<App/>, this.mountPoint);
  }

  disconnectedCallback(){
    this.removeChild(this.mountPoint);
  }
}

customElements.define('react-fragment', ReactFragment);
