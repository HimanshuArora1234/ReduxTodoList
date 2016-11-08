import { combineReducers } from 'redux';
import todos from './todos';
import users from './users';

const todoApp = combineReducers({
  todos,
  users
});

export default todoApp;
