// reducers/index.js
import { combineReducers } from 'redux';
import { dataReducer } from './reducers';

const rootReducer = combineReducers({
  dataReducer,
});

export default rootReducer;
