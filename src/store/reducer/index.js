import {combineReducer} from 'redux';

import MyReducer from './reducer';

const rootReducer = combineReducer({
	myrootReducer:MyReducer
})

export default rootReducer;

