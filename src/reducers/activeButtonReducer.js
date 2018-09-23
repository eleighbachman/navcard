import data from '../data/data.json';
import { SET_ACTIVE } from '../actions';
const activeButton = Object.keys(data)[0];

export default function(state=activeButton, action) {
  switch (action.type) {
    case SET_ACTIVE:
      console.log(action.payload);
      return action.payload;
    default:
      return state;
  }
}
