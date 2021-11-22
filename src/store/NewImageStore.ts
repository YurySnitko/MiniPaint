import { makeAutoObservable } from "mobx";
import { mainAPI } from "../api/mainApi";
import stores from "./stores";

export default class NewImageStore {
    chosenTool = '';
    isDrawing = false;
    chosenColor = "black";
    lineWidth = 1;

    constructor() {
        makeAutoObservable(this)
    }

    setChosenTool(tool: string) {
        this.chosenTool = tool;
    }

    setChosenColor(color: string) {
        this.chosenColor = color;
    }

    setLineWidth(width: number) {
        this.lineWidth = width;
    }

    saveImage(image: string) {
        const key = mainAPI.createImageKey(stores.authStore.userId);
        mainAPI.uploadImage(stores.authStore.userId, key, image)
    }

    // async getUsersData() {
    //     const usersData = await mainAPI.getUsersData();
    //     runInAction(() => this.usersData = usersData)
    // }
}