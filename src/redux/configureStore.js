import { createStore } from 'redux';
import { CartReducer, initialState } from './reducers/cartReducer';

export const ConfigureStore = () => {
    const store = createStore(
        CartReducer,
        initialState
    );

    return store;
};