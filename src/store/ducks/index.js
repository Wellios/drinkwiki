import { combineReducers } from 'redux';
import { reducer as categories } from './categories';
import { reducer as drinks } from './drinks';
import { reducer as details } from './details';

export default combineReducers({
  categories,
  drinks,
  details,
});
