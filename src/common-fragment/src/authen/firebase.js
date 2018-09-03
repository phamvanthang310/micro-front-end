import config from './firebase-config';
import firebase from 'firebase/app';
import 'firebase/auth';

export class FireBase {
  constructor() {
    this._config = config;
    this._instance = firebase.initializeApp(config);
  }

  get config() {
    return this._config;
  }

  get instance() {
    return this._instance;
  }

  get auth() {
    return firebase.auth;
  }
}