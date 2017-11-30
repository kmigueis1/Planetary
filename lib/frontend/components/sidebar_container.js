import SideBar from './sidebar';
import { connect } from 'react-redux';
import { receiveCurrentPlanet, removePlanet } from '../actions/planet_actions'
import { updateTimeLapse } from '../actions/time_lapse_actions'

const mapStateToProps = (state) => {
  return {
    planets: state.planets,
    timeLapse: state.timeLapse
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addPlanet: (planet) => (dispatch(receiveCurrentPlanet(planet))),
    deletePlanet: (name) => (dispatch(removePlanet(name))),
    newTimeLapse: (timeLapse) => (dispatch(updateTimeLapse(timeLapse)))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(SideBar);
