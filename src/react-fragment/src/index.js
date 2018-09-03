import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';
import webcomponent from 'webcomponent';
import bootstrap from 'bootstrap';

class ReactFragment extends HTMLElement {
  connectedCallback() {
    ReactDOM.render(<App/>, this);
  }
}

customElements.define('react-fragment', ReactFragment);