import { UPDATE_TIME_LAPSE } from '../actions/time_lapse_actions';

const TimeLapseReducer = (state = {factor: 1}, action) => {
  Object.freeze(state);
  let newState;
  switch(action.type){
    case UPDATE_TIME_LAPSE:
      newState = Object.assign({}, state, action.timeLapse);
      return newState;
    default: return state;
  }
};

export default TimeLapseReducer;
