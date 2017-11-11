import { RECEIVE_ALL_PLANETS } from '../actions/planet_actions';
import { RECEIVE_CURRENT_PLANET } from '../actions/planet_actions';

const PlanetReducer = (state = {}, action) => {

  console.log("im in RECEIVE_CURRENT_PLANET");
  let newState;
  switch(action.type){
    case RECEIVE_ALL_PLANETS:
      Object.freeze(state);
      newState = Object.assign({}, state, action.planets);
      return newState;
    case RECEIVE_CURRENT_PLANET:
      Object.freeze(state);
      console.log(state);
      console.log(action);
      let planetsArray = Object.keys(state);
      let numPlanets = planetsArray.length;
      let planetId;
      for (let i = 0; i <= numPlanets; i++){
        if(!planetsArray.includes(i)){
          planetId = i;
        }
      }
      action.planet.id = planetId;
      newState = Object.assign({}, state, {[planetId]: action.planet});
      return newState;
    default: return state;
  }
};

export default PlanetReducer;
