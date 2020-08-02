import { combineReducers } from 'redux';

import { authentication } from './authentication.reducer';
import { users } from './users.reducer';
import { alert } from './alert.reducer';
import project from './project.reducer';

const rootReducer = combineReducers({
  authentication,
  users,
  alert,
  project
});

export default rootReducer;