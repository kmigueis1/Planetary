import Canvas from './canvas';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    planets: state.planets,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {

  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Canvas);
