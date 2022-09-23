import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../Reducer';
import { composeWithDevtools } from 'redux-devtools-extension';

const store = createStore(rootReducer,
    composeWithDevtools(
        applyMiddleware(thunk)));

export default store;