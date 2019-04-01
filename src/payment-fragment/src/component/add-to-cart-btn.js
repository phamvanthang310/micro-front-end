import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export class AddToCartBtn extends Component {
  render() {
    return (
      <button className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect ">
        Add To Cart
      </button>
    );
  }
}

class PaymentAddToCart extends HTMLElement {
  mountPoint;

  connectedCallback() {
    this.mountPoint = document.createElement('div');
    this.mountPoint.classList.add('react-identifier');

    this.appendChild(this.mountPoint);

    ReactDOM.render(<AddToCartBtn/>, this.mountPoint);
  }

  disconnectedCallback(){
    this.removeChild(this.mountPoint);
  }
}

customElements.define('payment-add-to-cart', PaymentAddToCart);
