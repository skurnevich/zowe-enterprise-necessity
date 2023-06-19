export interface IElectronAPI {
  loadPreferences: () => Promise<void>,
}

declare global {
  interface Window {
    electronAPI: IElectronAPI;
    myAPI: {
      ping: function,
      myval: string,
    };
    electron: any,
  }
}c