import { makeAutoObservable } from 'mobx';
import { mainAPI } from 'api/mainApi';
import stores from 'store/stores';

export default class NewImageStore {
  chosenTool = '';
  isDrawing = false;
  chosenColor = 'black';
  lineWidth = 1;

  constructor() {
    makeAutoObservable(this);
  }

  setChosenTool(tool: string): void {
    this.chosenTool = tool;
  }

  setChosenColor(color: string): void {
    this.chosenColor = color;
  }

  setLineWidth(width: number): void {
    this.lineWidth = width;
  }

  saveImage(image: string): void {
    const key = mainAPI.createImageKey(stores.authStore.userId);
    mainAPI.uploadImage(stores.authStore.userId, key, image);
  }
}
