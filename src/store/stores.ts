import AuthStore from "./AuthStore";
import ImagesFeedStore from "./ImagesFeedStore";
import NewImageStore from "./NewImageStore";
import SettingsStore from "./SettingsStore";

const stores = {
    authStore: new AuthStore(),
    imagesFeedStore: new ImagesFeedStore(),
    newImageStore: new NewImageStore(),
    settingsStore: new SettingsStore()
}

export default stores

export type StoreType = typeof stores;