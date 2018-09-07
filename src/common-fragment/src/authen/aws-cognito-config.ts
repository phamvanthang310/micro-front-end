declare interface IAwsCognitoConfig {
  userPoolId: string;
  clientId: string;
  domainName: string;
}

const AwsCognitoConfig: IAwsCognitoConfig = {
  userPoolId: '',
  clientId: '',
  domainName: '',
};

export default AwsCognitoConfig;