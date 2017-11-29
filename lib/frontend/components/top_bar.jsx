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
        <div>Welcome to Planetary! Planetary is a simulation of our own solar system. Planet sizes are to scale*</div>
      </div>
    </div>
  ) : (<div></div>);
  return (
    <div>
    <div className="top-bar">
      <div className="title"><span className="title-span">Planetary</span></div>
      <img src="../../../images/Planetary_Icon.png"></img>
    </div>
    <div className="help-button" onClick={this.toggleModal}>Help</div>
      {helpModal}
    </div>
  );
}
}


export default TopBar;
