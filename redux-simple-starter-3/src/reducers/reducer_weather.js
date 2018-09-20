import { FETCH_WEATER } from '../actions/index';

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_WEATER:
      // because we don't want to manipulate the state, we return a new array concat to the new city
      // return state.concat([action.payload.data]);  same as the next line (ES6)
      return [action.payload.data, ...state];
    default:
      break;
  }
  return state;
}
