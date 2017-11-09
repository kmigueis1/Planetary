import * as THREE from 'three';
import * as System from './system';
import * as Util from './util';

var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

var camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 2000);
camera.position.set(0, 0 , 100);
let geometry = new THREE.BoxGeometry( 5, 5, 5 );
let material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
let cube = new THREE.Mesh( geometry, material );
let scene = new THREE.Scene();

scene.add( cube );
// cube.position.set(10, 10, 0);


//ARROW

// camera.position.set(100, 50, 50);

camera.lookAt(new THREE.Vector3(0, 0, 0));
var arrowMaterial = new THREE.LineBasicMaterial({ color: 0xffffff });
var arrowGeometry = new THREE.Geometry();
arrowGeometry.vertices.push(new THREE.Vector3(-10, 0, 0));
arrowGeometry.vertices.push(new THREE.Vector3(0, -10, 0));

arrowGeometry.vertices.push(new THREE.Vector3(0, 10, 0));
arrowGeometry.vertices.push(new THREE.Vector3(10, 0, 0));
arrowGeometry.vertices.push(new THREE.Vector3(0, 0, 0));
arrowGeometry.vertices.push(new THREE.Vector3(-10, 0, 0));

var line = new THREE.Line(arrowGeometry, arrowMaterial);
scene.add(line);
let sun = System.sun;
// sun.position.set(-60, 0, 0);
scene.add(sun);


var v1 = new THREE.Vector3(0,0,0);
var v2 = new THREE.Vector3(2, 2, 2);
var v3 = new THREE.Vector3(7, 7, 7);
var vectors = [v1, v2, v3];
let orbitalGeometry = new THREE.CircleGeometry(30, 100);
var orbitalMaterial = new THREE.LineBasicMaterial({ color: 0xffffff });
let orbit = new THREE.Line(orbitalGeometry, orbitalMaterial);
//
// var path = new THREE.Path(vectors);
scene.add(orbit);

// camera.position.z = 5;
let angle = 0;
let radius = 30;

let systemTime = 0;

let deltaAngle = Util.speedToAngle(20, radius, 60)
let mercury = System.createPlanet(50);
Util.centerPlanetAt(mercury, 25, 0, 0);
scene.add(mercury);

const mercuryMove = System.enablePlanet(mercury, 5, 5, [25,0,0]);
console.log(mercuryMove);

function animate() {


requestAnimationFrame( animate );
cube.rotation.x += 0.01;
cube.rotation.y += 0.01;
line.rotation.x += 0.01;
line.rotation.y += 0.01;
angle += deltaAngle;
systemTime += 1;

mercuryMove();

sun.position.x = radius * Math.sin(angle) - 30;

sun.position.y = radius * Math.cos(angle);

renderer.render( scene, camera );
}
animate();
