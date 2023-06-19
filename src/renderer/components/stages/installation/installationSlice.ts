import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../../store';

interface InstallationState {
  installationStatus: boolean;
  installationArgs: {
    installationDir: string;
    downloadDir: string;
    javaHome: string;
    nodeHome: string;
    setupConfig: any;
  };
  zoweVersion: string;
}

const initialState: InstallationState = {
  installationStatus: false,
  installationArgs: {
    installationDir: '',
    downloadDir: '',
    javaHome: '',
    nodeHome: '',
    setupConfig: {},
  },
  zoweVersion: '',
};

export const installationSlice = createSlice({
  name: 'installation',
  initialState,
  reducers: {
    setInstallationArgs: (state, action: PayloadAction<any>) => {
      state.installationArgs = action.payload;
    },
    setInstallationStatus: (state, action: PayloadAction<boolean>) => {
      state.installationStatus = action.payload;
    },
    setZoweVersion: (state, action: PayloadAction<string>) => {
      state.zoweVersion = action.payload;
    },
  }
});

export const { setInstallationArgs, setInstallationStatus, setZoweVersion } = installationSlice.actions;

export const selectInstallationArgs = (state: RootState) => state.installation.installationArgs;
export const selectZoweVersion = (state: RootState) => state.installation.zoweVersion;
export const selectInstallationStatus = (state: RootState) => state.installation.installationStatus;

export default installationSlice.reducer;
