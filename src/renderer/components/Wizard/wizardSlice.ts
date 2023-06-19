import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../store';

interface WizardState {
  loading: boolean;
  nextStepEnabled: boolean;
  yaml: any;
  schema: any;
  zoweCLIVersion: string;
}

const initialState: WizardState = {
  loading: false,
  nextStepEnabled: false,
  yaml: {},
  schema: {},
  zoweCLIVersion: '',
};

export const wizardSlice = createSlice({
  name: 'wizard',
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setNextStepEnabled: (state, action: PayloadAction<boolean>) => {
      state.nextStepEnabled = action.payload;
    },
    setYaml: (state, action: PayloadAction<any>) => {
      state.yaml = action.payload;
    },
    setSchema: (state, action: PayloadAction<any>) => {
      state.schema = action.payload;
    },
    setZoweCLIVersion: (state, action: PayloadAction<string>) => {
      state.zoweCLIVersion = action.payload;
    },
  },
});
export const { setLoading, setYaml, setSchema, setNextStepEnabled, setZoweCLIVersion } = wizardSlice.actions;
export const selectLoading = (state: RootState) => state.wizard.loading;
export const selectYaml = (state: RootState) => state.wizard.yaml;
export const selectSchema = (state: RootState) => state.wizard.schema;
export const selectNextStepEnabled = (state: RootState) => state.wizard.nextStepEnabled;
export const selectZoweCLIVersion = (state: RootState) => state.wizard.zoweCLIVersion;

export default wizardSlice.reducer;
