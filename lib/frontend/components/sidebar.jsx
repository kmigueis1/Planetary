import React from 'react';
import Planet from '../../planet';

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
    console.log(this.props);
    this.props.addPlanet(new Planet(10, 30, 200, [0,0,0]))

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
