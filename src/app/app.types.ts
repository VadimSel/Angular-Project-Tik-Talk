
// Для авторизации

export interface LoginForm {
  username: string
  password: string
}

export interface AuthSuccessResponse {
  access_token: string
  refresh_token: string
  token_type: string
}

export interface AuthErrorDetail {
  loc: (string | number)[]
  msg: string
  type: string
}

export interface AuthErrorResponse {
  detail: AuthErrorDetail[]
}

// ------------------------------ \\