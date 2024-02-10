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

export type DestroySessionResponseState = {
  message: string
} | ErrorType

export type UserInfoType = {
  login: string,
  pic_url: string,
  public_favorites_count: number,
  followers: number,
  following: number,
  pro: boolean | null,
  account_details: {
    email: string,
    private_favorites_count: number
  }
}

export type UserInfoResponseState = UserInfoType | ErrorType;