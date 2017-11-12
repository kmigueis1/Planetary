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

    let camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 15000);
    camera.position.set(0, 0 , 200);
    camera.lookAt(new THREE.Vector3(0, 0, 0));
    this.camera = camera;


    let scene = new THREE.Scene();
    this.scene = scene;

    let renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
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
    this.controls = controls;
    //
    // let mercury = System.createPlanet(5);
    // const mercuryMove = System.enablePlanet(mercury, 15, 15, [0,0,0], this.scene);
    // this.mercuryMove = mercuryMove;
    //
    // let venus = System.createPlanet(10, Util.planetColors("red"));
    // const venusMove = System.enablePlanet(venus, 5, 30, [0,0,0], this.scene);
    // this.venusMove = venusMove;

    // imageObjFt = new Image();
    // imageObjFt.crossOrigin = "anonymous"
    // imageObjFt.src = "images/space/cwd_ft.JPG"

    let skyboxGeometry = new THREE.CubeGeometry(5000,5000,5000);
    let skyboxMaterial = [
      new THREE.MeshBasicMaterial({map: new THREE.TextureLoader().load("../../../images/space2/img1_up.jpg"), side: THREE.DoubleSide}),
      new THREE.MeshBasicMaterial({map: new THREE.TextureLoader().load("../../../images/space2/img2_front.jpg"), side: THREE.DoubleSide}),
      new THREE.MeshBasicMaterial({map: new THREE.TextureLoader().load("../../../images/space2/img1_up.jpg"), side: THREE.DoubleSide}),
      new THREE.MeshBasicMaterial({map: new THREE.TextureLoader().load("../../../images/space2/img6_down.jpg"), side: THREE.DoubleSide}),
      new THREE.MeshBasicMaterial({map: new THREE.TextureLoader().load("../../../images/space2/img3_right.jpg"), side: THREE.DoubleSide}),
      new THREE.MeshBasicMaterial({map: new THREE.TextureLoader().load("../../../images/space2/img6_down.jpg"), side: THREE.DoubleSide})

    ];
    // let skyboxMaterial1 = new THREE.MeshFaceMaterial(skyboxMaterial);
    let skybox = new THREE.Mesh(skyboxGeometry, skyboxMaterial);
    this.scene.add(skybox);
    this.play()
  }

  componentDidUpdate () {
    let scene = this.scene;

    Object.keys(this.props.planets).forEach((planetName) => {
      let planet = this.props.planets[planetName];
      let existingPlanet = scene.getObjectByName(planetName);
      console.log("existing planet is ", existingPlanet);
      if (!existingPlanet){
        //creating new planet
        let planetBody = System.createPlanet(planet.radius, planet.color);
        planetBody.name = planetName;
        console.log("planet does not exist yet");
        let planetMove = System.enablePlanet(planetBody, planet.speed, planet.orbitalRadius, planet.orbitalCenter, scene );
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
