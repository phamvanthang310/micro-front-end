import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

class ReactFragment extends HTMLElement {
  connectedCallback() {
    const mountPoint = document.createElement('span');
    this.attachShadow({mode: 'open'}).appendChild(mountPoint);

    ReactDOM.render(<App/>, mountPoint);
  }
}

customElements.define('react-fragment', ReactFragment);