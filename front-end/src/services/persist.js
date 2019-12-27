import storage from 'redux-persist/lib/storage';

export const rootPersistConfig = {
  key: 'root',
  storage,
  whitelist: ['authReducer', 'userIdentity', 'postsReducer']
};
