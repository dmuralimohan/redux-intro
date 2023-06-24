import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';

import postsReducer from './posts/postsReducer';

const middleware = applyMiddleware(thunk);
const reducers = combineReducers({
    post:  postsReducer
});

const store = new createStore(reducers, middleware);

export default store;