import { combineReducers } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

// User Reducer
import authReducer from 'redux/reducers/user/auth';
import userReducer from 'redux/reducers/user/user';

const userPersistConfig = {
  key: 'adweaveUser',
  storage: storage,
  blacklist: ['error', 'isLoading'],
};

const rootReducer = combineReducers({
  auth: authReducer,
  user: persistReducer(userPersistConfig, userReducer),
});

export default rootReducer;
