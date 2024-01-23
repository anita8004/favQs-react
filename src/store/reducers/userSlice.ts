import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '@/store/store';
import {
  CreateSessionResponseState
} from '@/types/user'
import Cookies from 'js-cookie'
import { local } from 'stokado'

type userState = {
  session: CreateSessionResponseState | null
};

const initialState: userState = {
  session: local.session || null
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setSession: (state, action) => {
      state.session = action.payload
      local.session = action.payload
      Cookies.set('User-Token', action.payload['User-Token'])
    },
    removeSession: (state) => {
      state.session = null
      delete local.session
      Cookies.remove('User-Token')
    }
  }
})

export const {
  setSession,
  removeSession
} = userSlice.actions

export const selectUser = (state: RootState) => state.user.session;

export default userSlice.reducer