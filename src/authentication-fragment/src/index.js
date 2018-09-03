import { FireBaseAuth } from './firebase-auth';

class AuthenticationFragment extends HTMLElement {
  constructor() {
    super();
    this._fireBaseUiContainer = 'firebaseui-auth-container';
  }

  connectedCallback() {
    this.render();
    this._fireBaseUi = new FireBaseAuth().init(`#${this._fireBaseUiContainer}`);
  }

  render() {
    const content = `
      <h1>Welcome to My Awesome App</h1>
      <div id="${this._fireBaseUiContainer}"></div>
      <div id="loader">Loading...</div>
      `;
    this.innerHTML = content;
  }
}

customElements.define('authentication-fragment', AuthenticationFragment);