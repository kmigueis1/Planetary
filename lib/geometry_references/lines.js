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

//in requestAnimationFrame
line.rotation.x += 0.01;
line.rotation.y += 0.01;
