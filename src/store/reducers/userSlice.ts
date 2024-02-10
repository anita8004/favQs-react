import { createSlice } from '@reduxjs/toolkit'
import { REHYDRATE } from 'redux-persist'
import {
  UserInfoType
} from '@/types/user'
import Cookies from 'js-cookie'

export type userState = {
  username: string,
  isLoggedIn: boolean,
  info: UserInfoType | Record<string, never>
}

const initialState: userState = {
  username: '',
  isLoggedIn: false,
  info: {}
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setSession: (state, action) => {
      state.username = action.payload.login;
      state.isLoggedIn = true;
      Cookies.set('User-Token', action.payload['User-Token'])
    },
    removeSession: (state) => {
      state.username = '';
      state.isLoggedIn = false;
      state.info = {};
      Cookies.remove('User-Token')
    },
    setUserInfo: (state, action) => {
      state.info = action.payload
    }
  },
  extraReducers(builder) {
    builder.addCase(REHYDRATE, state => {
      if (state.username) {
        state.isLoggedIn = true
      }
    })
  },
})

export const {
  setSession,
  removeSession,
  setUserInfo
} = userSlice.actions

export default userSlice.reducer