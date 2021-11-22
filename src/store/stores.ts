import AuthStore from "./AuthStore";
import ImagesFeedStore from "./ImagesFeedStore";
import NewImageStore from "./NewImageStore";

const stores = {
    authStore: new AuthStore(),
    imagesFeedStore: new ImagesFeedStore(),
    newImageStore: new NewImageStore()
}

export default stores

export type StoreType = typeof stores;