import React from 'react';
import Planet from '../../planet';
import * as Util from '../../util';
import SideBarItem from './sidebar_item';



class SideBar extends React.Component {


  constructor(props){
    super(props);

    this.state = {
      name: "Earth",
      radius: "30",
      speed: "15",
      orbitalRadius: "500",
      eccentricity: "0",
      orbitalCenter: [0,0,0],
      color: "#00ffff",
      error: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.setRadius = this.setRadius.bind(this);
    this.setName = this.setName.bind(this);
    this.setSpeed = this.setSpeed.bind(this);
    this.setEccentricity = this.setEccentricity.bind(this);
    this.setOrbitalRadius = this.setOrbitalRadius.bind(this);
    this.setOrbitalCenterX = this.setOrbitalCenterX.bind(this);
    this.setOrbitalCenterY = this.setOrbitalCenterY.bind(this);
    this.setOrbitalCenterZ = this.setOrbitalCenterZ.bind(this);
    this.setColor = this.setColor.bind(this);
  }

  componentDidMount(){
    this.props.addPlanet( new Planet(3, 23, 56, [0,0,0], "#8C8C94", 0.205, "Mercury"));
    this.props.addPlanet( new Planet(12, 17, 108, [0,0,0], "#DE5F25", 0.0007, "Venus"));
    this.props.addPlanet( new Planet(13, 15, 150, [0,0,0], "#00a3ff", 0.017, "Earth"));
    this.props.addPlanet( new Planet(5, 12, 226, [0,0,0], "#F97A05", 0.094, "Mars"));
    this.props.addPlanet( new Planet(142, 7, 777, [0,0,0], "#C1844D", 0.049, "Jupiter"));
    this.props.addPlanet( new Planet(121, 5, 1431, [0,0,0], "#E0CDAD" , 0.057, "Saturn"));
    this.props.addPlanet( new Planet(51, 4, 2869, [0,0,0], "#C7EDF0", 0.046, "Uranus"));
    this.props.addPlanet( new Planet(49, 3, 4495, [0,0,0], "#3454DF", 0.011, "Neptune"));
    this.props.addPlanet( new Planet(10, 2, 5727, [0,0,0], "#7C6241", 0.244, "Pluto"));

  }


  handleSubmit(e){
    let name = this.state.name;
    if(!this.props.planets[name]){
      this.setState({error: false});
      let radius = parseInt(this.state.radius);
      let speed = parseInt(this.state.speed);
      let orbitalRadius = parseInt(this.state.orbitalRadius);
      let orbitalCenter = this.state.orbitalCenter;
      let color = this.state.color;
      let eccentricity = parseFloat(this.state.eccentricity)/100;
      this.props.addPlanet(new Planet(radius, speed, orbitalRadius, orbitalCenter,  color, eccentricity, name))
    } else {
      this.setState({error: true});
    }
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

  setEccentricity(e){
    this.setState({eccentricity: e.target.value})
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
        <SideBarItem key={planet.name} planet={planet} deletePlanet={this.props.deletePlanet}/>
      );
    });
    let errorMessage = this.state.error ? (
      <div className="error-message">
        <p>Please choose a unique name</p>
      </div>
    ) : (<div></div>)

    return (
      <div className="side-bar-container">

        <div className="add-planet-form">
          <div className="planet">
            <div className="planet-name">
              <span>Planet Name</span>
              <span><input type="text" value={this.state.name} onChange={this.setName} /></span>
            </div>
            {errorMessage}
          </div>
          <div className="planet">
            <span>Planet Radius</span>
            <div>
              <input className="form-input" type="range" min="1" max="200" value={this.state.radius} onChange={this.setRadius} />
              <span>{this.state.radius}</span>
            </div>
          </div>
          <div className="planet">
            <span>Velocity</span>
            <div>
              <input className="form-input" type="range" min="0" max="100" value={this.state.speed} onChange={this.setSpeed} />
              <span>{this.state.speed}</span>
            </div>
          </div>
          <div className="planet">
            <span>Orbital Radius</span>
            <div>
              <input className="form-input orbital-radius" type="range" min="1" max="6000" value={this.state.orbitalRadius} onChange={this.setOrbitalRadius} />
              <span>{this.state.orbitalRadius}</span>
            </div>
          </div>
          <div className="planet">
            <span>Orbital Radius</span>
            <div>
              <input className="form-input orbital-radius" type="range" min="1" max="6000" value={this.state.orbitalRadius} onChange={this.setOrbitalRadius} />
              <span>{this.state.orbitalRadius}</span>
            </div>
          </div>
          <div className="planet">
            <span>Eccentricity %</span>
            <div>
              <input className="form-input" type="range" min="0" max="100" value={this.state.eccentricity} onChange={this.setEccentricity} />
              <span>{this.state.eccentricity}</span>
            </div>
          </div>

          <div className="planet">
            <div className="planet-color">
              <span>Color</span>
              <span>{this.state.color}</span>
              <input type="color" value={this.state.color} onChange={this.setColor}/>
            </div>
          </div>

          <span className="orb-center-span">Orbital Center</span>
          <div>
            <input className="orb-center-input" type="number" value={this.state.orbitalCenter[0]} onChange={this.setOrbitalCenterX} />
            <input className="orb-center-input" type="number" value={this.state.orbitalCenter[1]} onChange={this.setOrbitalCenterY} />
            <input className="orb-center-input" type="number" value={this.state.orbitalCenter[2]} onChange={this.setOrbitalCenterZ} />
          </div>

          <div className="button addPlanet" onClick={this.handleSubmit}><div>Add Planet</div></div>
        </div>
          <div className="side-bar-item-container">
            {planets}
          </div>
      </div>
    );
  }

}

export default SideBar;
