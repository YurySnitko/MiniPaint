import AuthStore from './AuthStore/AuthStore';
import ImagesFeedStore from './ImagesFeedStore/ImagesFeedStore';
import NewImageStore from './NewImageStore/NewImageStore';
import SettingsStore from './SettingsStore/SettingsStore';

const stores = {
  authStore: new AuthStore(),
  imagesFeedStore: new ImagesFeedStore(),
  newImageStore: new NewImageStore(),
  settingsStore: new SettingsStore(),
};

export default stores;
