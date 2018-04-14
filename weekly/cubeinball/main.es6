let scene = new THREE.Scene();
let renderer = new THREE.WebGLRenderer();
let camera = new THREE.OrthographicCamera(-10, 10, -10, 10, -10, 10);

let colors = [0x295863, 0xFEFF8A, 0x8FFAF7, 0xFCA1A1];
renderer.setClearColor(colors[0]);
document.body.appendChild(renderer.domElement);

let w = 50;
let h = 200;
// let geometry = new THREE.SphereGeometry(3, 32, 32);
// SphereGeometry取不到顶点信息
let geometry = new THREE.SphereGeometry(7, w, h);
let material = new THREE.MeshBasicMaterial({color: colors[2]});
let ball = new THREE.Mesh(geometry, material);
let width = window.innerWidth > window.innerHeight ? window.innerHeight : window.innerWidth;
renderer.setSize(width, width);

let ballVertices = ball.geometry.vertices;

// let mesh = new THREE.Object3D();

// let boxGeometry, cube;
// for (let i = 0; i < ballVertices.length; i++) {
    //     cube = new THREE.Mesh(boxGeometry, material);
    //     if (i % 101 === 30) {
        //         cube.position.set(ballVertices[i].x, ballVertices[i].y, ballVertices[i].z);
        //         mesh.add(cube);
        //     }

        // }

        // scene.add(mesh);
        // renderer.render(scene, camera);
let boxGeometry = new THREE.BoxGeometry(0.05, 0.05, 0.05);
let mesh = new THREE.Object3D();
// mesh.rotation.set(new THREE.Vector3(Math.PI, 0 , 0));
mesh.rotation.x = Math.PI;
let t = 0;
let cube, i;
function renderIt() {
    for (let j = 0; j < w; j++) {
        for (let k = 10; k > 0; k--) {
            i = Math.floor(w * t * k / 10) + j;
            if (i < w * (h - 1) + 2) {
                cube = new THREE.Mesh(boxGeometry, material);
                cube.position.set(ballVertices[i].x, ballVertices[i].y, ballVertices[i].z);
                if (t < h) {
                    mesh.add(cube);
                }
            }
        }
    }

    scene.add(mesh);
    mesh.rotateY(0.01);
    mesh.rotateZ(0.02);
    renderer.render(scene, camera);
    if (t < h - 1) {
        mesh.children = [];
    }
    t++;
    requestAnimationFrame(renderIt);
}

renderIt();
