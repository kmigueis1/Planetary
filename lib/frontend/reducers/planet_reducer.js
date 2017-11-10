
import { RECEIVE_CURRENT_PLANET } from '../actions/planet_actions';

const PlanetReducer = (state = {}, action) => {
  switch(action.type){
    case RECEIVE_CURRENT_PLANET:
    Object.freeze(state);
    const newState = Object.assign({}, state, action.planet);
    return newState;
    default: return state;
  }
};

export default PlanetReducer;
