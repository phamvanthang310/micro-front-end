import fireBase  from 'fireBase';
import FireBaseUI  from 'FireBaseUI';

export class FireBaseAuth {
  constructor() {
    console.log('fireBase', fireBase);
    console.log('FireBaseUI', FireBaseUI);


    this._uiConfig = {
      callbacks: {
        signInSuccessWithAuthResult: function (authResult, redirectUrl) {
          // User successfully signed in.
          // Return type determines whether we continue the redirect automatically
          // or whether we leave that to developer to handle.
          return true;
        },
        uiShown: function () {
          // The widget is rendered.
          // Hide the loader.
          document.getElementById('loader').style.display = 'none';
        }
      },
      // Will use popup for IDP Providers sign-in flow instead of the default, redirect.
      signInFlow: 'popup',
      signInSuccessUrl: '<url-to-redirect-to-on-success>',
      signInOptions: [
        // Leave the lines as is for the providers you want to offer your users.
        fireBase.auth.GoogleAuthProvider.PROVIDER_ID,
        fireBase.auth.EmailAuthProvider.PROVIDER_ID
      ]
    };

    this._fireBaseUI = new FireBaseUI.auth.AuthUI(fireBase.auth());
  }

  init(elementSelector) {
    this._fireBaseUI.start(elementSelector, this._uiConfig);
  }

}


