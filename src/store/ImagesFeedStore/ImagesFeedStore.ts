import { mainAPI } from 'api/mainApi';
import { makeAutoObservable, runInAction, toJS } from 'mobx';
import { SelectValue } from 'antd/lib/select';
import { UserData, UsersData } from '../stores.interfaces';

export default class ImagesFeedStore {
  usersData = {} as UsersData;
  chosenUserId = '';

  constructor() {
    makeAutoObservable(this);
  }

  async getUsersData(): Promise<void> {
    const usersData = await mainAPI.getUsersData();
    runInAction(() => (this.usersData = usersData));
  }

  setChosenUser(userId: SelectValue): void {
    this.chosenUserId = String(userId);
  }

  get images(): string[][] {
    if (this.chosenUserId) {
      return Object.entries(toJS(this.usersData)[this.chosenUserId].images);
    } else {
      const arr: string[][] = [];
      this.usersData &&
        Object.values(toJS(this.usersData)).forEach((e: UserData) =>
          arr.push(...Object.entries(e.images))
        );
      return arr;
    }
  }

  get users(): string[] {
    return this.usersData ? Object.keys(this.usersData) : [];
  }
}
