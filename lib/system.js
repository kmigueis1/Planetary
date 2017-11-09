import * as THREE from 'three';
import * as Util from './util';

export const createPlanet = (radius, color = 0xffff00) => {
  let planetGeometry = new THREE.SphereGeometry(radius, 50, 50);
  let planetMaterial = new THREE.MeshBasicMaterial({color: color});
   return new THREE.Mesh(planetGeometry, planetMaterial);
};


export const enablePlanet = (planet, speed, orbitalRadius, startPos, scene) => {
  const myDeltaAngle = Util.speedToAngle(speed, orbitalRadius, 60);
  scene.add(planet);
  createOrbit(startPos, orbitalRadius, scene);
  let myAngle = 0;
  return function (){
   //startPos is an array, [x,y,z]
   myAngle += myDeltaAngle;
   planet.position.x = orbitalRadius * Math.sin(myAngle) + startPos[0];
   planet.position.y = orbitalRadius * Math.cos(myAngle) + startPos[1];
   planet.position.z = startPos[2];
 };
};

export const createOrbit = (startPos, orbitalRadius, scene) => {

  let orbitalGeometry = new THREE.CircleGeometry(orbitalRadius, 200);
  orbitalGeometry.vertices.shift();
  var orbitalMaterial = new THREE.LineBasicMaterial({ color: 0xffffff });
  let orbit = new THREE.Line(orbitalGeometry, orbitalMaterial);
  orbit.position.x = startPos[0];
  orbit.position.y = startPos[1];
  orbit.position.z = startPos[2];
  scene.add(orbit);
}



export const movePlanets = () => {

};
