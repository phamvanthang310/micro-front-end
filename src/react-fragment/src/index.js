import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';
import webcomponent from 'webcomponent';
import bootstrap from 'bootstrap';

class ReactFragment extends HTMLElement {
  connectedCallback() {
    const mountPoint = document.createElement('span');
    this.appendChild(mountPoint);

    ReactDOM.render(<App/>, mountPoint);
  }
}

customElements.define('react-fragment', ReactFragment);