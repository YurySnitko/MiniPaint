import { makeAutoObservable, runInAction } from 'mobx';
import { authAPI } from 'api/authApi';

export default class AuthStore {
  isAuth = false;
  userId = '';

  constructor() {
    makeAutoObservable(this);
  }

  async login(email: string, password: string): Promise<void> {
    const loginData = await authAPI.login(email, password);
    loginData &&
      runInAction(() => {
        this.isAuth = true;
        this.userId = loginData.uid;
      });
  }

  async signUp(email: string, password: string): Promise<void> {
    await authAPI.signUp(email, password);
    this.login(email, password);
  }

  logout = async (): Promise<void> => {
    await authAPI.logout();
    this.isAuth = false;
    this.userId = '';
  };
}
