import React from 'react';
import * as THREE from 'three';
import * as System from '../../system';
import * as Util from '../../util';
import TrackballControls from 'three-trackballcontrols';


class Canvas extends React.Component {


  constructor(props){
    super(props);
    this.play = this.play.bind(this);
    this.state = {
      movements: []
    }
  }

  play () {
    this.state.movements.forEach((func) => {
      func();
    });
    this.renderer.render(this.scene, this.camera );
    this.controls.update();
    requestAnimationFrame(this.play);
  }

  componentDidMount(){

    let camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 50000);
    // camera.position.set(0.015331118153885154, -358.4075697326089, 74.64545664990149);
    camera.position.set(0.009517270441932195, -222.49269331451126, 46.33849867099263);
    camera.lookAt(new THREE.Vector3(0, 0, 0));
    this.camera = camera;


    let scene = new THREE.Scene();
    this.scene = scene;

    let renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);

    window.addEventListener('resize', () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    },false);

    this.renderer = renderer;
    document.getElementById("canvas-wrapper").appendChild(this.renderer.domElement);
    //should I have this on the window or on the canvas-wrapper?
    let controls = new TrackballControls(camera, this.renderer.domElement);
    controls.rotateSpeed = 2.0;
    controls.zoomSpeed = 1.2;
    controls.panSpeed = 0.8;
    controls.noZoom = false;
    controls.noPan = false;
    controls.dynamicDampingFactor = 0.3;
    controls.minDistance = 100;
    controls.maxDistance = 20000;
    this.controls = controls;
    //
    // let core = System.createSun(5);
    let sun = System.createSun(30, 1, 0xfdfd46);
    scene.add(sun);
    // scene.add(core);
    //
    //if hosting on github, these hosted image paths will work. If hosting somewhere else, these image paths will have to be changed.
    let skyboxGeometry = new THREE.CubeGeometry(40000,40000,40000);
    let skyboxMaterial = [
      new THREE.MeshBasicMaterial({map: new THREE.TextureLoader().load("https://raw.githubusercontent.com/kmigueis1/Planetary/master/images/space2/img1_up.jpg"), side: THREE.DoubleSide}),
      new THREE.MeshBasicMaterial({map: new THREE.TextureLoader().load("https://raw.githubusercontent.com/kmigueis1/Planetary/master/images/space2/img2_front.jpg"), side: THREE.DoubleSide}),
      new THREE.MeshBasicMaterial({map: new THREE.TextureLoader().load("https://raw.githubusercontent.com/kmigueis1/Planetary/master/images/space2/img1_up.jpg"), side: THREE.DoubleSide}),
      new THREE.MeshBasicMaterial({map: new THREE.TextureLoader().load("https://raw.githubusercontent.com/kmigueis1/Planetary/master/images/space2/img6_down.jpg"), side: THREE.DoubleSide}),
      new THREE.MeshBasicMaterial({map: new THREE.TextureLoader().load("https://raw.githubusercontent.com/kmigueis1/Planetary/master/images/space2/img3_right.jpg"), side: THREE.DoubleSide}),
      new THREE.MeshBasicMaterial({map: new THREE.TextureLoader().load("https://raw.githubusercontent.com/kmigueis1/Planetary/master/images/space2/img6_down.jpg"), side: THREE.DoubleSide})

    ];
    // let skyboxMaterial1 = new THREE.MeshFaceMaterial(skyboxMaterial);
    let skybox = new THREE.Mesh(skyboxGeometry, skyboxMaterial);
    this.scene.add(skybox);

    let sunLight = new THREE.PointLight(0xffffff, 2, 10000, 2.5);
    sunLight.position.set(0, 0, 0);
    scene.add(sunLight);
    let ambientLight = new THREE.AmbientLight(0x404040);
    scene.add(ambientLight);
    this.play()
  }

  componentDidUpdate () {
    let scene = this.scene;
    console.log("timelapse numerb is ", this.props.timeLapse)
    Object.keys(this.props.planets).forEach((planetName) => {
      let planet = this.props.planets[planetName];
      let existingPlanet = scene.getObjectByName(planetName);
      if (!existingPlanet){
        //creating new planet
        let planetBody = System.createPlanet(planet.radius, planet.color);
        planetBody.name = planetName;
        console.log("planet does not exist yet");
        let planetMove = System.enablePlanet(planetBody, planet.speed, planet.orbitalRadius, planet.orbitalCenter, planet.eccentricity, scene);
        this.state.movements.push(planetMove);
      } else {
        //implement planet editing?
        //update planet with new props
        // Object.keys(planet).forEach()
        // System.updatePlanet(planetBody, )
      }
    })
  }

  componentWillReceiveProps(nextProps) {
    //deleting planet in canvas that no longer exists in nextProps
    let newPropsArray = Object.keys(nextProps.planets);
    let oldPropsArray = Object.keys(this.props.planets);
    let scene = this.scene;

    oldPropsArray.forEach((planetName) => {
      if (!newPropsArray.includes(planetName)){
        let existingPlanet = scene.getObjectByName(planetName);
        let existingOrbit = scene.getObjectByName(`${planetName}Orbit`);
        System.deleteObject(existingPlanet, scene);
        System.deleteObject(existingOrbit, scene);
      }
    });
  }

  render(){
    return (
      <div className="canvas-wrapper" id="canvas-wrapper">

      </div>
    );
  }

}

export default Canvas;
