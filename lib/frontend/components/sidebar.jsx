import React from 'react';
import Planet from '../../planet';
import * as Util from '../../util';
import InputRange from 'react-input-range';


class SideBar extends React.Component {


  constructor(props){
    super(props);

    this.state = {
      radius: "5"
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.setRadius = this.setRadius.bind(this);
  }

  componentDidMount(){

  }


  handleSubmit(e){
    let radius = parseInt(this.state.radius);
    this.props.addPlanet(new Planet(radius, 30, 200, [0,0,0], Util.planetColors("red"), "superearth"))
  }

  setRadius(e){
    this.setState({radius: e.target.value})
  }
  // <InputRange minValue={1} maxValue={100} value={this.state.radius} onChange={this.setRadius}/>
// <input type="range" min="1" max="100" defaultValue="5" onInput={this.setRadius}/>

  render(){
    return (
      <div className="side-bar-container">

            <input type="text"  onChange={this.setRadius} value={this.state.radius}/>

        <button onClick={this.handleSubmit}>AddPlanet</button>
      </div>
    );
  }

}

export default SideBar;
