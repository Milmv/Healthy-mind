import { combineReducers } from 'redux';

import menu from './menu';
import result from './result';
import params from './params';
import list from './list';
import logo from './logo';
import content from './content';


const rootReducer = combineReducers({
  menu,
  result,
  params,
  list,
  logo,
  content,
});

export default rootReducer;