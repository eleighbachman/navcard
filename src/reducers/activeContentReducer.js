import data from '../data/data.json';
import { SET_ACTIVE, SHOW_FORM_DATA } from '../actions';
const activeContent = data[Object.keys(data)[0]];

export default function(state=activeContent, action) {
  switch (action.type) {
    case SET_ACTIVE:
      return {...data[action.payload]}
    case SHOW_FORM_DATA:
      return state;
    default:
      return state;
  }
}
