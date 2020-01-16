import { AUTH_UPDATED } from './types';

export const updateAuth = (token, username) => {
    return {
        type : AUTH_UPDATED,
        payload : {
            token : token,
            username : username
        }
    }
}