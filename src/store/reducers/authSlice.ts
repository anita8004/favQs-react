import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '@/store/store';

interface AuthState {
  isLogin: boolean,
  user: null | {
    login: string,
    email: string,
    userToken: string,
  }
}

const initialState: AuthState = {
  isLogin: false,
  user: null
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {}
})

export default authSlice