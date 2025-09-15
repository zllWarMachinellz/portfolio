import mod from 'astro/zod';
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader, type GLTF } from 'three/examples/jsm/loaders/GLTFLoader.js';


export const initThreejs = () => {
    const container = document.getElementById('canvas-container');

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.set(0, 1, 4.5);
    
    

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true});
    renderer.setSize(520,600);
    camera.aspect = 520 / 600;
    camera.updateProjectionMatrix();
    container?.appendChild(renderer.domElement);
    //   const light = new THREE.AmbientLight(0xffffff, 5);
    //   scene.add(light);

    
    const pointLight = new THREE.PointLight(0xffffff, 50, 10); // color, intensidad, distancia
    pointLight.position.set(0,0,5);
    scene.add(pointLight);

    const pointLight1 = new THREE.PointLight(0xffffff, 100, 10); // color, intensidad, distancia
    pointLight1.position.set(11,-7,5);
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(0xffffff, 200, 10); // color, intensidad, distancia
    pointLight2.position.set(8,8,5);
    scene.add(pointLight2);

    const pointLight3 = new THREE.PointLight(0xffffff, 100, 10); // color, intensidad, distancia
    pointLight3.position.set(1,8,5);
    scene.add(pointLight3);

    const pointLight4 = new THREE.PointLight(0xffffff, 100, 10); // color, intensidad, distancia
    pointLight4.position.set(6,1,5);
    scene.add(pointLight4);


    

    // Cargar modelo GLB
    const loader = new GLTFLoader();
    loader.load('models/card.glb', (gltf: GLTF) => {
        const model = gltf.scene;
        model.scale.set(0.5, 0.5, 0.5)
        model.translateY(-2)
        model.rotateY(160.6)
        scene.add(model);
    }, undefined, (err: any) => {
        console.error('Error cargando modelo:', err);
    });

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.enableZoom = false;
    controls.enablePan= false;

    const animate = () => {
        requestAnimationFrame(animate);
        controls.update();
        renderer.render(scene, camera);
    };
    animate();

}      