import SideBar from './sidebar';
import { connect } from 'react-redux';
import { receivePlanet } from '../actions/planet_actions'


const mapStateToProps = (state) => {
  return {
    planets: state.planets,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addPlanet: () => (dispatch(logout())),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SideBar);
