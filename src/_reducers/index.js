import { combineReducers } from 'redux';

import { authentication } from './authentication.reducer';
import { users } from './users.reducer';
import { alert } from './alert.reducer';
import projects from './project.reducer';

const rootReducer = combineReducers({
  authentication,
  users,
  alert,
  projects
});

export default rootReducer;