import { mainAPI } from '../api/mainApi';
import { makeAutoObservable, runInAction, toJS } from "mobx";
import { SelectValue } from 'antd/lib/select';
import { UserDataType, UsersDataType } from './stores.types';

export default class ImagesFeedStore {
    usersData = {} as UsersDataType
    chosenUserId = '' 

    constructor() {
        makeAutoObservable(this)
    }

    async getUsersData() {
        const usersData = await mainAPI.getUsersData();
        runInAction(() => this.usersData = usersData)
    }

    setChosenUser(userId: SelectValue) {
        this.chosenUserId = String(userId)
    }

    get images() {
        if (this.chosenUserId) {
            return Object.entries(toJS(this.usersData)[this.chosenUserId].images)
        } else {
            const arr: string[][] = [];
            this.usersData && Object.values(toJS(this.usersData)).forEach((e: UserDataType) => arr.push(...Object.entries(e.images)));
            return arr;
        }
    }

    get users() {
        return this.usersData ? Object.keys(this.usersData) : [];
    }
}