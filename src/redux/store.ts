import { configureStore } from '@reduxjs/toolkit';

import themeReducer from './features/themeSlice';
import authReducer from './features/auth/authSlice';
import categoryReducer from './features/catagorySlice';
import {baseApi} from './api/baseApi'

import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
 

 
const persistConfig = {
  key: 'root',
  storage,
}

const persistedThemeReducer = persistReducer(persistConfig,themeReducer )
const persistedCategoryReducer = persistReducer(persistConfig,categoryReducer )
const persistedAuthReducer = persistReducer(persistConfig,authReducer )

export const store = configureStore({
  reducer: {
    auth:persistedAuthReducer,
    theme:persistedThemeReducer,
    category:persistedCategoryReducer,
    [baseApi.reducerPath]: baseApi.reducer,
  },
  // Add middleware, enhancers, etc. if needed
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(baseApi.middleware),

});



export const persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;

