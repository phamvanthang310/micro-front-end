export default interface BaseAuthentication {
  login(credential: { username: string, password: string });

  logout();

  signUp(userData: any);

  getInstance();

  getCurrentUser();
}