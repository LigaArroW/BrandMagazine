interface IToken {
    access: string
    refresh: string
}


export interface IAuth {
    success: boolean
    error: string
    message: string
    token?: IToken
}


export enum TokenNames {
    access = 'accessToken',
    refresh = 'refreshToken'
}