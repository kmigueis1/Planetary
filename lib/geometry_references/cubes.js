let geometry = new THREE.BoxGeometry( 5, 5, 5 );
let material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
let cube = new THREE.Mesh( geometry, material );
scene.add( cube );

//in requestAnimationFrame
cube.rotation.x += 0.01;
cube.rotation.y += 0.01;
