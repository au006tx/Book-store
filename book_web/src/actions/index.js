import { AUTH_UPDATED } from './types';

export const updateAuth = (token) => {
    return {
        type : AUTH_UPDATED,
        payload : token
    }
}