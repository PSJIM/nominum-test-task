import { combineReducers } from 'redux';
import categoriesReducer from './categoriesReducer';
import approvedCountReducer from './approvedCountReducer';
import forbiddenCountReducer from './forbiddenCountReducer';
import viewReducer from './viewReducer';

export default combineReducers({
  categories: categoriesReducer,
  approvedCount: approvedCountReducer,
  forbiddenCount: forbiddenCountReducer,
  view: viewReducer,
});
