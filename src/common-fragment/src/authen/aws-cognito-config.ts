declare interface IAwsCognitoConfig {
  userPoolId: string;
  clientId: string;
  domainName: string;
  callbackUrl: string;
  loginUrl: string;
  logoutUrl: string;
}

const AwsCognitoConfig: IAwsCognitoConfig = {
  userPoolId: '',
  clientId: '',
  domainName: '',
  callbackUrl: '',
  loginUrl: `https://${this.domainName}/login?response_type=token&client_id=${this.clientId}&redirect_uri=${this.callbackUrl}`,
  logoutUrl: '',
};

export default AwsCognitoConfig;

//https://micro-frontend.auth.us-east-1.amazoncognito.com/login?redirect_uri=https://www.example.org&response_type=token&client_id=36pf8co5ucbqs6aesarhnanmuc
export const config = {
  // Domain name
  domain: 'micro-frontend.auth.us-east-1.amazoncognito.com',

  // Authorized scopes
  scope: ['phone', 'email', 'profile', 'openid', 'aws.cognito.signin.user.admin'],

  // Callback URL
  redirectSignIn: 'https://www.example.org',

  // Sign out URL
  redirectSignOut: 'https://www.example.org',

  // 'code' for Authorization code grant,
  // 'token' for Implicit grant
  responseType: 'token',

  // optional, for Cognito hosted ui specified options
  options: {
    // Indicates if the data collection is enabled to support Cognito advanced security features. By default, this flag is set to true.
    AdvancedSecurityDataCollectionFlag: true
  }
};
