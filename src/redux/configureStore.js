import { createStore,combineReducers } from 'redux';
import { CartReducer} from './reducers/cartReducer';

export const ConfigureStore = () => {
    const store = createStore(combineReducers({
        cart:CartReducer,
    }));

    return store;
};