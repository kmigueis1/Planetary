import * as THREE from 'three';
// import OrbitControls from 'three-orbitcontrols';
import TrackballControls from 'three-trackballcontrols';
import * as System from './system';
import * as Util from './util';


//initial setup
var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

var camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 2000);
camera.position.set(0, 0 , 200);
camera.lookAt(new THREE.Vector3(0, 0, 0));

// // if using OrbitControls instead of TrackballControls
// let controls = new OrbitControls(camera, renderer.domElement);
// controls.enableDamping = true;
// controls.dampingFactor = 0.25;
// controls.enableZoom = false;

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
controls.update();
}
animate();
