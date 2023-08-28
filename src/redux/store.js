import { configureStore } from '@reduxjs/toolkit';
import { logger } from 'redux-logger';
import missionsReducer from './missions/missionsSlice';
import rocketsReducer from './rockets/rocketsSlice';

const store = configureStore({
  reducer: {
    missions: missionsReducer,
    rockets: rocketsReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
