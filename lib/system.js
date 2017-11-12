import * as THREE from 'three';
import * as Util from './util';


export const GRAVIMETRIC_CONSTANT = 6.67

export const createPlanet = (radius, color = 0xffff00) => {
  let planetGeometry = new THREE.SphereGeometry(radius, 50, 50);
  let planetMaterial = new THREE.MeshBasicMaterial({color: color});
   return new THREE.Mesh(planetGeometry, planetMaterial);
};


export const enablePlanet = (planet, speed, orbitalRadius, orbitalCenter, scene) => {
  const myDeltaAngle = Util.speedToAngle(speed, orbitalRadius, 60);
  scene.add(planet);
  createOrbit(planet.name, orbitalCenter, orbitalRadius, scene);
  let myAngle = 0;
  return function (){
   //orbitalCenter is an array, [x,y,z]
   myAngle += myDeltaAngle;
   planet.position.x = orbitalRadius * Math.sin(myAngle) + orbitalCenter[0];
   planet.position.y = orbitalRadius * Math.cos(myAngle) + orbitalCenter[1];
   planet.position.z = orbitalCenter[2];
 };
};


export const enableEulerOrbit = (planet, speed, orbitalRadius, orbitalCenter, scene) => {
  //referencing euler derived equations of simplified orbital motion:
  //dr/dt^2 = r * dTheta/dt^2 - G*M/r^2 and
  // dTheta/dt^2 = -2 * dr/dt * dTheta/dt / r
  //note dr/dt is equivalent to velocity and Theta is the angle in orbit between starting postion and center and current position and center

  const myDeltaAngle = Util.speedToAngle(speed, orbitalRadius, 60);
  scene.add(planet);
  createOrbit(planet.name, orbitalCenter, orbitalRadius, scene);
  let myAngle = 0;
  return function (){
   //orbitalCenter is an array, [x,y,z]
   myAngle += myDeltaAngle;
   planet.position.x = orbitalRadius * Math.sin(myAngle) + orbitalCenter[0];
   planet.position.y = orbitalRadius * Math.cos(myAngle) + orbitalCenter[1];
   planet.position.z = orbitalCenter[2];
 };
};

export const calculatePolarAngleAcceleration = (planetBody, centralBody) => {
  // dTheta/dt^2
  let planetData = planetBody.userData
  let PolarAngleAccel = -2 * (planetData.freeFallVelocity * planetData.polarAngleSpeed )/planetData.orbitalRadius;
  return PolarAngleAccel;
}

export const calculateAcceleration = (planetBody, centralBody) => {
  let planetData = planetBody.userData
  let acceleration = (
    (planetData.orbitalRadius * Math.pow(planetData.polarAngleSpeed, 2))
     - (( GRAVIMETRIC_CONSTANT * centralBody.userData.mass ) / planetData.orbitalRadius)
  )
  return acceleration;
}

export const createOrbit = (planetName, orbitalCenter, orbitalRadius, scene) => {

  let orbitalGeometry = new THREE.CircleGeometry(orbitalRadius, 200);
  orbitalGeometry.vertices.shift();
  var orbitalMaterial = new THREE.LineBasicMaterial({ color: 0xd3d3d3 });
  let orbit = new THREE.Line(orbitalGeometry, orbitalMaterial);
  orbit.name = `${planetName}Orbit`
  orbit.position.x = orbitalCenter[0];
  orbit.position.y = orbitalCenter[1];
  orbit.position.z = orbitalCenter[2];
  scene.add(orbit);
}

// D3D3D3
 // 0xffffff

 export const deleteObject = (objectBody, scene) => {
   scene.remove(objectBody);
 }

export const movePlanets = () => {

};
