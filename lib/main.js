import * as THREE from 'three';
import * as System from './system';
import * as Util from './util';

//initial setup
var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

var camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 2000);
camera.position.set(0, 0 , 200);
camera.lookAt(new THREE.Vector3(0, 0, 0));


const onWindowResize = () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
};


let scene = new THREE.Scene();

//add objects

let mercury = System.createPlanet(5);
const mercuryMove = System.enablePlanet(mercury, 5, 15, [0,0,0], scene);
let venus = System.createPlanet(10, Util.planetColors("red"));
const venusMove = System.enablePlanet(venus, 50, 30, [0,0,0], scene);

let earth = System.createPlanet(5, Util.planetColors("aqua"));
const earthMove = System.enablePlanet(earth, 100, 50, [0,0,0], scene);

function animate() {
requestAnimationFrame( animate );
mercuryMove();
venusMove();
earthMove();
renderer.render( scene, camera );
}
animate();
