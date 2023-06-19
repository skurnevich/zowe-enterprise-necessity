import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import connectionReducer from './components/stages/connection/connectionSlice';
import wizardReducer from './components/wizard/wizardSlice';
import installationReducer from './components/stages/installation/installationSlice';

export const store = configureStore({
  reducer: {
    wizard: wizardReducer,
    connection: connectionReducer,
    installation: installationReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
