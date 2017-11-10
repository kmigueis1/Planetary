import { combineReducers } from 'redux';
import PlanetReducer from './planet_reducer'

const RootReducer = combineReducers({
  planets: PlanetReducer
});

export default RootReducer;
