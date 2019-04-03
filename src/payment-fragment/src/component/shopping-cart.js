import React, { Component } from 'react';
import ReactDOM from 'react-dom';

let eventRef = null;

export class ShoppingCart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };

    eventRef = this.addToCartHandler.bind(this);
    window.addEventListener('payment:addToCart', eventRef);
  }

  render() {
    return (
      <div className="material-icons mdl-badge mdl-badge--overlap" data-badge={this.state.counter}>shopping_cart</div>);
  }

  addToCartHandler(event) {
    const isbn13 = event.detail;
    this.setState((state) => ({
      counter: state.counter + 1
    }));

    console.log('🛒 payment:addToCart is caught: ' + isbn13);
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

  disconnectedCallback() {
    this.removeChild(this.mountPoint);
    window.removeEventListener('payment:addToCart', eventRef);
  }
}

customElements.define('payment-shopping-cart', PaymentShoppingCart);
