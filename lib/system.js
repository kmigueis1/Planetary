import * as THREE from 'three';
import * as Util from './util';


// export const sunPosition = new THREE.Vector3(50, 50, 50);
let sunGeometry = new THREE.SphereGeometry(0.5, 50, 50);
let sunMaterial = new THREE.MeshBasicMaterial({color: 0xffff00});
export const sun = new THREE.Mesh(sunGeometry, sunMaterial);

export const createPlanet = (radius, color = 0xffff00) => {
  let planetGeometry = new THREE.SphereGeometry(radius, 50, 50);
  let planetMaterial = new THREE.MeshBasicMaterial({color: color});
   return new THREE.Mesh(sunGeometry, sunMaterial);
};


export const enablePlanet = (planet, speed, orbitalRadius, startPos) => {
  const myDeltaAngle = Util.speedToAngle(speed, orbitalRadius, 60);
  // console.log(myDeltaAngle);
  let myAngle = 0;
  return function (){
   //startPos is an array, [x,y,z]
   myAngle += myDeltaAngle;
  //  console.log(myAngle);
  //  console.log(myDeltaAngle);
   planet.position.x = orbitalRadius * Math.sin(myAngle) - startPos[0];
   planet.position.y = orbitalRadius * Math.cos(myAngle) - startPos[1];
   planet.position.z = startPos[2];

 };
};



export const movePlanets = () => {

};
