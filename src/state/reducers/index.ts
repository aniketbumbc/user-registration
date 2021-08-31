import { combineReducers } from 'redux';
import registrationReducer from '../reducers/resistrationReducer';

const reducers = combineReducers({
  registration: registrationReducer,
});

export default reducers;

export type State = ReturnType<typeof reducers>;
