import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export class ShoppingCart extends Component {
  render() {
    return (<div className="material-icons mdl-badge mdl-badge--overlap" data-badge="1">shopping_cart</div>);
  }
}

class PaymentShoppingCart extends HTMLElement {
  mountPoint;

  connectedCallback() {
    this.mountPoint = document.createElement('div');
    this.mountPoint.classList.add('react-identifier');

    this.appendChild(this.mountPoint);

    ReactDOM.render(<ShoppingCart/>, this.mountPoint);
  }

  disconnectedCallback(){
    this.removeChild(this.mountPoint);
  }
}

customElements.define('payment-shopping-cart', PaymentShoppingCart);
