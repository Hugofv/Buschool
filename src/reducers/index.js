import { combineReducers } from 'redux';

import user from './user';
import aluno from './aluno';

export default combineReducers({
  usuario: user,
  aluno: aluno
});