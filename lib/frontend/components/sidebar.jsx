import React from 'react';
import Planet from '../../planet';
import * as Util from '../../util';


class SideBar extends React.Component {


  constructor(props){
    super(props);

    this.state = {

    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount(){

  }


  handleSubmit(e){
    console.log("im in handle submit",this.props);
    this.props.addPlanet(new Planet(10, 30, 200, [0,0,0], Util.planetColors("red"), "superearth"))
  }

  render(){
    return (
      <div>
          <button onClick={this.handleSubmit}>AddPlanet</button>
      </div>
    );
  }

}

export default SideBar;
