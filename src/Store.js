import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise';
import rootReducer from './reducers';

const Store = createStore(
	rootReducer,
	applyMiddleware(promise)
);

export default Store;
