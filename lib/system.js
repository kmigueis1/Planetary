import * as THREE from 'three';
import * as Util from './util';

export const createPlanet = (radius, color = 0xffff00) => {
  let planetGeometry = new THREE.SphereGeometry(radius, 50, 50);
  let planetMaterial = new THREE.MeshBasicMaterial({color: color});
   return new THREE.Mesh(planetGeometry, planetMaterial);
};


export const enablePlanet = (planet, speed, orbitalRadius, orbitalCenter, scene) => {
  const myDeltaAngle = Util.speedToAngle(speed, orbitalRadius, 60);
  scene.add(planet);
  createOrbit(orbitalCenter, orbitalRadius, scene);
  let myAngle = 0;
  return function (){
   //orbitalCenter is an array, [x,y,z]
   myAngle += myDeltaAngle;
   planet.position.x = orbitalRadius * Math.sin(myAngle) + orbitalCenter[0];
   planet.position.y = orbitalRadius * Math.cos(myAngle) + orbitalCenter[1];
   planet.position.z = orbitalCenter[2];
 };
};

export const createOrbit = (orbitalCenter, orbitalRadius, scene) => {

  let orbitalGeometry = new THREE.CircleGeometry(orbitalRadius, 200);
  orbitalGeometry.vertices.shift();
  var orbitalMaterial = new THREE.LineBasicMaterial({ color: 0xd3d3d3 });
  let orbit = new THREE.Line(orbitalGeometry, orbitalMaterial);
  orbit.position.x = orbitalCenter[0];
  orbit.position.y = orbitalCenter[1];
  orbit.position.z = orbitalCenter[2];
  scene.add(orbit);
}

// D3D3D3
 // 0xffffff

export const movePlanets = () => {

};
