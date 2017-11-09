import * as THREE from 'three';
import * as System from './system';
import * as Util from './util';
// GREEN SPINNING CUBE

let scene = new THREE.Scene();
// let camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
//
// let renderer = new THREE.WebGLRenderer();
// renderer.setSize( window.innerWidth, window.innerHeight );
// document.body.appendChild( renderer.domElement );
let geometry = new THREE.BoxGeometry( 5, 5, 5 );
let material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
let cube = new THREE.Mesh( geometry, material );
scene.add( cube );
// cube.position.set(10, 10, 0);


//ARROW
var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

var camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 2000);
camera.position.set(0, 0 , 100);
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

// camera.position.z = 5;
let angle = 0;
let radius = 30;

let deltaAngle = Util.speedToAngle(20, radius, 60)
console.log(deltaAngle);
console.log(radius * Math.cos(angle));
console.log(radius * Math.sin(angle));
function animate() {



requestAnimationFrame( animate );
cube.rotation.x += 0.01;
cube.rotation.y += 0.01;
line.rotation.x += 0.01;
line.rotation.y += 0.01;
angle += deltaAngle;

sun.position.x = radius * Math.sin(angle) - 30;

sun.position.y = radius * Math.cos(angle);


renderer.render( scene, camera );
}
animate();
