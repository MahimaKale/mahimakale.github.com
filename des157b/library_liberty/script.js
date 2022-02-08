var granimInstance = new Granim({
    element: '#canvas-complex',
    direction: 'left-right',
    transitionSpeed: 10000,
    isPausedWhenNotInView: true,
    states : {
        "default-state": {
            gradients: [
                [
                    { color: '#975649', pos: .2 },
                    { color: '#FFB486', pos: .8 },
                    { color: '#906FA2', pos: 1 }
                ], [
                    { color: '#40e0d0', pos: 0 },
                    { color: '#ff8c00', pos: .2 },
                    { color: '#ff0080', pos: .75 }
                ],
            ]
        }
    }
});

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 50, window.innerWidth / window.innerHeight, 1, 1000 );

var renderer = new THREE.WebGLRenderer({alpha: true});
renderer.setClearColor(0xffffff, 0);

renderer.setSize(window.innerWidth, window.innerHeight);

document.body.appendChild(renderer.domElement);
camera.position.set(0, 0, 30);


//Create a new ambient light
var light = new THREE.AmbientLight( 0xffffff)
scene.add( light )

//Create a new directional light
var light = new THREE.DirectionalLight( 0xfdfcf0, 1 );
light.position.set(20,10,20);
light.castShadow = true;
scene.add( light );


//Create geometry and material
var sphereGeometry = new THREE.SphereGeometry( 5, 50, 50 );
var sphereMaterial = new THREE.MeshPhongMaterial({
color: 0x664488});
var sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);


//cube 
const geometry = new THREE.BoxGeometry( 35, 5, 5 );
const material = new THREE.MeshBasicMaterial( {color: 0x885533} );
var cube = new THREE.Mesh(geometry, material);
cube.position.x = 0;
cube.position.y = -7;
scene.add(cube);
scene.add(sphere);


let acceleration = 9.5;
let roll_distance = 20;
let roll_positon_x = -10;
let roll_positon_y = -5;
let timeStep = 0.01;
let timeCounter = Math.sqrt(roll_distance*2/acceleration);
let initialSpeed = acceleration*timeCounter;




var render = function (actions) {
 
    requestAnimationFrame( render );
    //console.log(sphere.position.x)
    
    if(sphere.position.x < roll_positon_x){
        timeCounter = 0;
    }
    sphere.position.x = roll_positon_x + initialSpeed*timeCounter - 0.4 *acceleration * timeCounter *timeCounter;

    timeCounter += timeStep;

    cube.rotation.x = 5;

// link from where i go it: https://medium.com/geekculture/learning-three-js-1-how-to-create-a-bouncing-ball-5f423a629e59
    renderer.render(scene, camera);
};
render();

