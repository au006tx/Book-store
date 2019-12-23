import { AUTH_UPDATED } from '../actions/types';

const INITIAL_STATE = {
    token : null
};

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case AUTH_UPDATED:
            return {...state, token: action.payload };
        default:
            return state;
    }
}