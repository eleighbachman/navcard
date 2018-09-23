import data from '../data/data.json';
import { SET_ACTIVE, SHOW_FORM_DATA } from '../actions';
const activeClass = data[Object.keys(data)[0]]["class"];


export default function(state=activeClass, action) {
  switch (action.type) {
    case SET_ACTIVE:
      return data[action.payload]["class"];
    case SHOW_FORM_DATA:
      return { ...action.payload, class: "form"}
    default:
      return state;
  }
}
