import { makeAutoObservable } from 'mobx';
import { ThemeType } from '../Stores/stores.interfaces';

export default class SettingsStore {
  themeStyle = 'light' as ThemeType;

  constructor() {
    makeAutoObservable(this);
  }

  setTheme(theme: ThemeType): void {
    this.themeStyle = theme;
  }
}
