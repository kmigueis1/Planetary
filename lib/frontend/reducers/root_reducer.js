import { combineReducers } from 'redux';
import PlanetReducer from './planet_reducer';
import TimeLapseReducer from './time_lapse_reducer';

const RootReducer = combineReducers({
  planets: PlanetReducer,
  timeLapse: TimeLapseReducer
});

export default RootReducer;
