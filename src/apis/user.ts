import request from '@/utils/request'
import {
  CreateUserPayloadState,
  CreateUserResponseState,
  CreateSessionPayloadState,
  CreateSessionResponseState,
  DestroySessionResponseState,
  UserInfoResponseState
} from '@/types/user'

/** 註冊 */
const createUser = (payload: CreateUserPayloadState): Promise<CreateUserResponseState> => request.post('/users', payload)

/** 取得會員資訊 */
const getUser = (login: string): Promise<UserInfoResponseState> => request.get(`users/${login}`)

/** 登入 */
const createSession = (payload: CreateSessionPayloadState): Promise<CreateSessionResponseState> => request.post('/session', payload)

/** 登出 */
const deleteSession = (): Promise<DestroySessionResponseState> => request.delete('/session')

export default {
  createUser,
  getUser,
  createSession,
  deleteSession
}