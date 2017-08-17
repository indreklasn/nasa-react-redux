import { combineReducers } from 'redux';
import AppReducer from './app_reducer';

const rootReducer = combineReducers({
	astronomy: AppReducer
})

export default rootReducer;
