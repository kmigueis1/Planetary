import React from 'react';
import Planet from '../../planet';
import * as Util from '../../util';
import SideBarItem from './sidebar_item';



class SideBar extends React.Component {


  constructor(props){
    super(props);

    this.state = {
      name: "Earth",
      radius: "5",
      speed: "0",
      orbitalRadius: "50",
      orbitalCenter: [0,0,0],
      color: "#00ffff"
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.setRadius = this.setRadius.bind(this);
    this.setName = this.setName.bind(this);
    this.setSpeed = this.setSpeed.bind(this);
    this.setOrbitalRadius = this.setOrbitalRadius.bind(this);
    this.setOrbitalCenterX = this.setOrbitalCenterX.bind(this);
    this.setOrbitalCenterY = this.setOrbitalCenterY.bind(this);
    this.setOrbitalCenterZ = this.setOrbitalCenterZ.bind(this);
    this.setColor = this.setColor.bind(this);
  }

  componentDidMount(){

  }


  handleSubmit(e){
    let name = this.state.name;
    let radius = parseInt(this.state.radius);
    let speed = parseInt(this.state.speed);
    let orbitalRadius = parseInt(this.state.orbitalRadius);
    let orbitalCenter = this.state.orbitalCenter;
    let color = this.state.color;
    this.props.addPlanet(new Planet(radius, speed, orbitalRadius, orbitalCenter,  color, name))
  }

  setName(e){
    this.setState({name: e.target.value})
  }

  setRadius(e){
    this.setState({radius: e.target.value})
  }

  setSpeed(e){
    this.setState({speed: e.target.value})
  }

  setOrbitalRadius(e){
    this.setState({orbitalRadius: e.target.value})
  }

  setOrbitalCenterX(e){
    this.setState({orbitalCenter: [e.target.value, this.state.orbitalCenter[1], this.state.orbitalCenter[2]]})
  }

  setOrbitalCenterY(e){
    this.setState({orbitalCenter: [this.state.orbitalCenter[0], e.target.value, this.state.orbitalCenter[2]]})
  }

  setOrbitalCenterZ(e){
    this.setState({orbitalCenter: [this.state.orbitalCenter[0], this.state.orbitalCenter[1], e.target.value]})
  }

  setColor(e) {
    console.log(e.target.value);
    this.setState({color: e.target.value})
  }

  render(){
    let planets = Object.values(this.props.planets).map((planet) => {
      return (
        <SideBarItem key={planet.id} planet={planet}/>
      );
    });


    return (
      <div className="side-bar-container">

        <div className="add-planet-form">
          <span>Planet Name</span>
            <div>
              <input type="text" value={this.state.name} onChange={this.setName} />
            </div>

          <span>Planet Radius</span>
            <div>
              <input type="range" min="1" max="100" value={this.state.radius} onChange={this.setRadius} />
              <span>{this.state.radius}</span>
            </div>

          <span>Velocity</span>
            <div>
              <input type="range" min="0" max="100" value={this.state.speed} onChange={this.setSpeed} />
              <span>{this.state.speed}</span>
            </div>

          <span>Orbital Radius</span>
            <div>
              <input type="range" min="1" max="100" value={this.state.orbitalRadius} onChange={this.setOrbitalRadius} />
              <span>{this.state.orbitalRadius}</span>
            </div>

          <span>Orbital Center</span>
            <div>
              <input className="orb-center-input" type="number" value={this.state.orbitalCenter[0]} onChange={this.setOrbitalCenterX} />
              <input className="orb-center-input" type="number" value={this.state.orbitalCenter[1]} onChange={this.setOrbitalCenterY} />
              <input className="orb-center-input" type="number" value={this.state.orbitalCenter[2]} onChange={this.setOrbitalCenterZ} />
            </div>

            <span>Color</span>
              <div>
                <span>{this.state.color}</span>
                <input type="color" value={this.state.color} onChange={this.setColor}/>
              </div>
            <div className="button" onClick={this.handleSubmit}><div>+</div></div>
        </div>
        {planets}
      </div>
    );
  }

}

export default SideBar;
