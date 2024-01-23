import request from '@/utils/request'

export interface SignInPayloadState {
  login: string,
  password: string
}

export type RegisterPayloadState = SignInPayloadState & {
  email: string
}

interface CreateUserPayloadState {
  user: RegisterPayloadState
}

interface CreateSessionPayloadState {
  user: SignInPayloadState
}

/** 註冊 */
const createUser = (payload: CreateUserPayloadState) => request.post('/users', payload)

/** 取得會員資訊 */
const getUser = (login: string) => request.get(`users/${login}`)

/** 登入 */
const createSession = (payload: CreateSessionPayloadState) => request.post('/session', payload)

/** 登出 */
const deleteSession = () => request.delete('/session')

export default {
  createUser,
  getUser,
  createSession,
  deleteSession
}