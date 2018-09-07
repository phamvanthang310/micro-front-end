export default interface BaseAuthentication {
  login();

  logout();

  getInstance();

  getCurrentUser();
}