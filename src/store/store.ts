import { configureStore, ThunkAction, Action, combineReducers } from '@reduxjs/toolkit'
import { persistReducer, persistStore } from 'redux-persist'
import thunk from 'redux-thunk'
import storage from 'redux-persist/lib/storage'
import counterReducer from '../features/counter/counterSlice'
import userReducer from './reducers/userSlice'

const persistConfig = {
  key: 'root',
  storage,
  blocklist: ['counter']
}

const userPersistConfig = {
  key: 'user',
  storage,
  blocklist: ['isLoggedIn']
}

const rootReducer = combineReducers({
  counter: counterReducer,
  user: persistReducer(userPersistConfig, userReducer)
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  devTools: !import.meta.env.PROD,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false
  })
})

export const persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;