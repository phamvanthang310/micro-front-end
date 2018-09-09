export default interface BaseAuthentication {
  login();

  logout();

  signUp(userData: any);

  getInstance();

  getCurrentUser();
}