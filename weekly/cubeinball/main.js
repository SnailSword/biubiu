"use strict";

var scene = new THREE.Scene();
var renderer = new THREE.WebGLRenderer();
var camera = new THREE.OrthographicCamera(-10, 10, -10, 10, -10, 10);

var colors = [0x295863, 0xFEFF8A, 0x8FFAF7, 0xFCA1A1];
renderer.setClearColor(colors[0]);
document.body.appendChild(renderer.domElement);

var w = 13;
var h = 175;
// let geometry = new THREE.SphereGeometry(3, 32, 32);
// SphereGeometry取不到顶点信息
var geometry = new THREE.SphereGeometry(7, w, h);
var material = new THREE.MeshBasicMaterial({ color: colors[2] });
var ball = new THREE.Mesh(geometry, material);
var width = window.innerWidth > window.innerHeight ? window.innerHeight : window.innerWidth;
renderer.setSize(width, width);

var ballVertices = ball.geometry.vertices;

// let mesh = new THREE.Object3D();

// let boxGeometry, cube;
var boxGeometry = new THREE.BoxGeometry(0.1, 0.1, 0.1);
// for (let i = 0; i < ballVertices.length; i++) {
//     cube = new THREE.Mesh(boxGeometry, material);
//     if (i % 101 === 30) {
//         cube.position.set(ballVertices[i].x, ballVertices[i].y, ballVertices[i].z);
//         mesh.add(cube);
//     }

// }

// scene.add(mesh);
// renderer.render(scene, camera);

var t = h - w;
var cube = void 0,
    i = void 0;
function renderIt() {
    for (var j = 0; j < w; j++) {
        i = w * t + j;
        cube = new THREE.Mesh(boxGeometry, material);
        cube.position.set(ballVertices[i].x, ballVertices[i].y, ballVertices[i].z);
        scene.add(cube);
    }
    renderer.render(scene, camera);
    while (scene.children.length > 0) {
        scene.remove(scene.children[0]);
    }
    t--;
    if (i > w) {
        requestAnimationFrame(renderIt);
    }
}

renderIt();
