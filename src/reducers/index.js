import { combineReducers } from 'redux';
import buttonsReducer from './buttonsReducer';
import activeButtonReducer from './activeButtonReducer';
import activeContentReducer from './activeContentReducer';
import activeClassReducer from './activeClassReducer';


const rootReducer = combineReducers({
  buttons: buttonsReducer,
  activeButton: activeButtonReducer,
  activeContent: activeContentReducer,
  activeClass: activeClassReducer,
});

export default rootReducer;
