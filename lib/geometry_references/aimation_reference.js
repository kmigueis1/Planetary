import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './frontend/store/store';
import Root from './frontend/components/root';

import * as THREE from 'three';
// import OrbitControls from 'three-orbitcontrols';
import TrackballControls from 'three-trackballcontrols';
import * as System from './system';
import * as Util from './util';

//react setup
document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  const store = configureStore();
  ReactDOM.render(< Root store={store} />, root)
});



//initial setup
let renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

let camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 2000);
camera.position.set(0, 0 , 200);
camera.lookAt(new THREE.Vector3(0, 0, 0));



let controls = new TrackballControls(camera);
controls.rotateSpeed = 2.0;
controls.zoomSpeed = 1.2;
controls.panSpeed = 0.8;
controls.noZoom = false;
controls.noPan = false;
controls.dynamicDampingFactor = 0.3;
controls.keys = [65, 83, 68];

let scene = new THREE.Scene();

//add objects

let mercury = System.createPlanet(5);
const mercuryMove = System.enablePlanet(mercury, 0, 15, [0,0,0], scene);

let venus = System.createPlanet(10, Util.planetColors("red"));
const venusMove = System.enablePlanet(venus, 0, 30, [0,0,0], scene);

let earth = System.createPlanet(5, Util.planetColors("aqua"));
const earthMove = System.enablePlanet(earth, 0, 50, [0,0,0], scene);

let mars = System.createPlanet(5, Util.planetColors("blue"));
const marsMove = System.enablePlanet(mars, 0, 75, [0,0,0], scene);


let jupiter = System.createPlanet(5, Util.planetColors("red"));
const jupiterMove = System.enablePlanet(jupiter, 0, 100, [0,0,0], scene);


let uranus = System.createPlanet(5, Util.planetColors("aqua"));
const uranusMove = System.enablePlanet(uranus, 0, 120, [0,0,0], scene);


let neptune = System.createPlanet(5, Util.planetColors("pale yellow"));
const neptuneMove = System.enablePlanet(neptune, 0, 130, [0,0,0], scene);


let pluto = System.createPlanet(5, Util.planetColors("tan"));
const plutoMove = System.enablePlanet(pluto, 0, 150, [0,0,0], scene);

function animate() {
requestAnimationFrame( animate );
mercuryMove();
venusMove();
earthMove();
marsMove();
jupiterMove();
uranusMove();
neptuneMove();
plutoMove();
renderer.render( scene, camera );
controls.update();
}
animate();

// //resources


// // if using OrbitControls instead of TrackballControls
// let controls = new OrbitControls(camera, renderer.domElement);
// controls.enableDamping = true;
// controls.dampingFactor = 0.25;
// controls.enableZoom = false;
