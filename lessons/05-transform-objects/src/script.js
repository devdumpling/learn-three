import "./style.css";
import * as THREE from "three";

// Canvas
const canvas = document.querySelector("canvas.webgl");

// Scene
const scene = new THREE.Scene();

/**
 * Objects
 */
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

// Scale
mesh.scale.set(2, 0.5, 0.5);

// Rotation
// rotation is an Euler
mesh.rotation.reorder("YXZ"); // reorders the axes rotation order
mesh.rotation.y = Math.PI;
mesh.rotation.x = Math.PI * 0.25;

// This order thing is problematic, so many people will use quaternions instead
// Quaternions are a bit more complicated, but they are more flexible

// LookAt
// This is a method that will make the object look at a specific point

/**
 * Sizes
 */
const sizes = {
  width: 800,
  height: 600,
};

// Axes helper
const axesHelper = new THREE.AxesHelper();
scene.add(axesHelper);

/**
 * Camera
 */
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.set(1, 1, 3);
scene.add(camera);

// camera.lookAt(mesh.position);

// Mouse
const mouse = new THREE.Vector3();

// Event listeners
window.addEventListener("mousemove", (event) => {
  mouse.x = (event.clientX / sizes.width) * 2 - 1;
  mouse.y = -(event.clientY / sizes.height) * 2 + 1;
});

window.addEventListener("click", () => {
  console.log("click");
  camera.lookAt(mesh.position);
});

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
});
renderer.setSize(sizes.width, sizes.height);
renderer.render(scene, camera);

// Render loop
const tick = () => {
  // Update objects
  mesh.rotation.y += 0.01;

  // look at mouse position
  camera.lookAt(mouse);

  // Render
  renderer.render(scene, camera);

  // console.log(mouse);

  // Call tick again on the next frame
  window.requestAnimationFrame(tick);
};

tick();
