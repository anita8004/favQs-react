import { ErrorType } from './error'

export interface SignInPayloadState {
  login: string,
  password: string
}

export type RegisterPayloadState = SignInPayloadState & {
  email: string
}

export interface CreateUserPayloadState {
  user: RegisterPayloadState
}

export type CreateUserResponseState = {
  'User-Token': string,
  login: string
} | ErrorType

export interface CreateSessionPayloadState {
  user: SignInPayloadState
}

export type CreateSessionResponseState = {
  'User-Token': string,
  login: string,
  email: string
} | ErrorType