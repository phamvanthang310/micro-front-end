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