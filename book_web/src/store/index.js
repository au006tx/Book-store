import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'
import reducers from '../reducers';

const persistConfig = {
    key: 'root',
    storage,
}  

const persistedReducer = persistReducer(persistConfig, reducers)

export default createStore(persistedReducer, {}, compose(applyMiddleware(thunk)));