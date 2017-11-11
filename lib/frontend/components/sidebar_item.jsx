import React from 'react';

const SideBarItem = (props) => {
  return (
    <div className="side-bar-item">
      <div className="planet-info">
        <div className="planet-name" >
          <span  style={{color: `${props.planet.color}`}}>{props.planet.name}</span>
        </div>
        <div className="velocity">
          <span >Velocity: {props.planet.speed}px/sec</span>
        </div>
      </div>
    </div>
  );
}


export default SideBarItem;
