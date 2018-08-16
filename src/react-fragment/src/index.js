import React from 'react';
import ReactDOM from 'react-dom';
import '@webcomponents/custom-elements/src/native-shim';

import './index.css';
import App from './App';

class ReactFragment extends HTMLElement {
  connectedCallback() {
    const mountPoint = document.createElement('span');
    this.appendChild(mountPoint);

    ReactDOM.render(<App/>, mountPoint);
  }
}

customElements.define('react-fragment', ReactFragment);