import { RECEIVE_ALL_PLANETS, RECEIVE_CURRENT_PLANET, REMOVE_PLANET } from '../actions/planet_actions';

const PlanetReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState;
  switch(action.type){
    case RECEIVE_ALL_PLANETS:
      newState = Object.assign({}, state, action.planets);
      return newState;

    case RECEIVE_CURRENT_PLANET:
      // let planetsArray = Object.keys(state);
      // let numPlanets = planetsArray.length;
      // let planetId;
      // for (let i = 0; i <= numPlanets; i++){
      //   if(!planetsArray.includes(i)){
      //     planetId = i;
      //   }
      // }
      // action.planet.id = planetId;
      newState = Object.assign({}, state, {[action.planet.name]: action.planet});
      return newState;

    case REMOVE_PLANET:
      newState = Object.assign({}, state);
      delete newState[action.planetName]
      return newState;
    default: return state;
  }
};

export default PlanetReducer;
