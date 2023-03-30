// Create the 3D globe
var container = document.createElement('div');
document.body.appendChild(container);

var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 1100);
camera.target = new THREE.Vector3(0, 0, 0);

var scene = new THREE.Scene();

var texture = new THREE.TextureLoader().load('https://threejs.org/examples/textures/land_ocean_ice_cloud_2048.jpg');

var geometry = new THREE.SphereGeometry(200, 20, 20);
var material = new THREE.MeshBasicMaterial({ map: texture });
var globe = new THREE.Mesh(geometry, material);

scene.add(globe);

// Add lighting to the scene
var ambientLight = new THREE.AmbientLight(0x555555);
scene.add(ambientLight);

var directionalLight = new THREE.DirectionalLight(0xffffff, 1);
directionalLight.position.set(1, 1, 1).normalize();
scene.add(directionalLight);

// Render the 3D globe
var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
container.appendChild(renderer.domElement);

function animate() {
    requestAnimationFrame(animate);

    // Rotate the globe
    globe.rotation.y += 0.005;

    renderer.render(scene, camera);
}

animate();