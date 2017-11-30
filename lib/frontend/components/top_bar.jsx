import React from 'react';
class TopBar extends React.Component {
constructor(props){
  super(props);
  this.state = {
    helpOpen: true
  };
  this.toggleModal = this.toggleModal.bind(this);
}

toggleModal(){
  let newState = !this.state.helpOpen
  this.setState({helpOpen: newState});
}

render(){
  let helpModal = this.state.helpOpen ? (
    <div className="help-modal-container" onClick={this.toggleModal}>
      <div className="help-modal">
        <div>
          <div className="p">Welcome to Planetary! Planetary is a simulation of our own solar system. Planet sizes are to scale with each other
          (excluding the Sun) and orbital sizes and shape are to scale with each other. The relation between orbits and planet sizes are
          not to scale (you wouldnt see any planets if they were!). </div>
          <div className="p">You can use sliders on the sidebar to select
          properties for a new planet and its orbit and click on the "Add Planet" button to add a new planet when ready. The newly added
          planet will be added to the scrollable list of existing planets on the sidebar. To remove a planet, click on the minus
          button next to the planet's name on the list.</div>
          <div className="p">Use the Time Lapse slider to see how the planets move years at a time.</div>
       </div>
      </div>
    </div>
  ) : (<div></div>);
  return (
    <div>
    <div className="top-bar">
      <div className="title"><span className="title-span">Planetary</span></div>
      <img src="https://raw.githubusercontent.com/kmigueis1/Planetary/master/images/Planetary_Icon.png"></img>
    </div>
    <div className="help-button" onClick={this.toggleModal}>Help</div>
      {helpModal}
    </div>
  );
}
}


export default TopBar;
