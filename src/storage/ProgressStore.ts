import Store from 'electron-store';

// TODO: Store overall progress and restore up to last successful step

const storeDefault = {
  "installation": {
    "uploadYaml": false,
    "download": false,
    "upload": false,
    "unpax": false,
    "install": false
  }
};

const store = new Store({cwd: 'zen-progress-store'});
store.set(storeDefault);

export class ProgressStore {

  public static getAll(): any {
    return store.store;
  };

  public static set(key: string, value: string | boolean) {
    store.set(key, value);
  };

  public static deleteAll(): void {
    store.store = storeDefault;
  };
}
