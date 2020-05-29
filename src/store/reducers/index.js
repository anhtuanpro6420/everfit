import { combineReducers } from 'redux';
import errorsReducer from './errorsReducer';
import newsfeedReducer from './newsfeedReducer';

const rootReducer = combineReducers({
	errors: errorsReducer,
	newsfeed: newsfeedReducer
});

export default rootReducer;
