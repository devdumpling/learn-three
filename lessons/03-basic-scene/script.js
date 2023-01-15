// Screen sizing
const width = window.innerWidth;
const height = window.innerHeight;

// canvas
const canvas = document.querySelector(".webgl");

const scene = new THREE.Scene();

// Cube
const geometry = new THREE.BoxGeometry(2, 2, 2);
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

// Camera
const camera = new THREE.PerspectiveCamera(75, width / height);
camera.position.z = 5;
scene.add(camera);

// Renderer
const renderer = new THREE.WebGLRenderer({
  canvas,
});
renderer.setSize(width, height);

// Render loop
renderer.render(scene, camera);
