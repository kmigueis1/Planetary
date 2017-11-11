import SideBar from './sidebar';
import { connect } from 'react-redux';
import { receiveCurrentPlanet, removePlanet } from '../actions/planet_actions'


const mapStateToProps = (state) => {
  return {
    planets: state.planets,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addPlanet: (planet) => (dispatch(receiveCurrentPlanet(planet))),
    deletePlanet: (name) => (dispatch(removePlanet(name)))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(SideBar);
