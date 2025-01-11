import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader';

const ThreeDModel = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        // Basic scene setup
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current });
        renderer.setSize(window.innerWidth, window.innerHeight);
        document.body.appendChild(renderer.domElement);
        scene.background = new THREE.Color(0xffffff);  // White background

        // Enable shadows in the renderer (not used for the object to prevent shadows)
        renderer.shadowMap.enabled = false;

        // Add ambient light (no shadows, even illumination)
        const ambientLight = new THREE.AmbientLight(0xffffff, 2); // Increased intensity
        scene.add(ambientLight);

        // Optionally, add a point light for even lighting
        const pointLight = new THREE.PointLight(0xffffff, 2, 100); // Intensity 2, distance 100
        pointLight.position.set(0, 5, 5);
        scene.add(pointLight);

        // Load the FBX model
        const loader = new FBXLoader();
        let model;
        loader.load('/moovit.fbx', (obj) => {
            model = obj;
            scene.add(model);

            // Set the model's position and scale
            model.position.set(0, 0.5, 0);
            model.scale.set(0.0015, 0.0015, 0.0015); // Adjust scale as necessary

            // Disable shadows on the model (ensure no shadows are cast or received)
            model.traverse((child) => {
                if (child.isMesh) {
                    child.castShadow = false;
                    child.receiveShadow = false;
                }
            });
        });

        // Set camera position
        camera.position.z = 5;

        // Mouse controls
        let isMouseDown = false;
        let prevX = 0;
        let prevY = 0;
        let rotationX = 0;
        let rotationY = 0;
        let velocityX = 0;
        let velocityY = 0;
        const speedFactor = 0.005;
        const friction = 0.99;

        const onMouseDown = (e) => {
            isMouseDown = true;
            prevX = e.clientX;
            prevY = e.clientY;
        };

        const onMouseUp = () => {
            isMouseDown = false;
        };

        const onMouseMove = (e) => {
            if (isMouseDown) {
                const deltaX = e.clientX - prevX;
                const deltaY = e.clientY - prevY;
                velocityX = deltaY * speedFactor;
                velocityY = deltaX * speedFactor;
                prevX = e.clientX;
                prevY = e.clientY;
            }
        };

        window.addEventListener('mousedown', onMouseDown);
        window.addEventListener('mouseup', onMouseUp);
        window.addEventListener('mousemove', onMouseMove);

        // Animation loop with delta time
        const animate = (time) => {
            requestAnimationFrame(animate);

            const deltaTime = time * 0.001; // Convert to seconds

            // Apply the velocity to the rotation
            rotationX += velocityX;
            rotationY += velocityY;

            // Apply friction
            velocityX *= friction;
            velocityY *= friction;

            if (model) {
                model.rotation.x = rotationX;
                model.rotation.y = rotationY;
            }
            if (!isMouseDown && velocityY < 0.001){
                velocityY = 0;
            }
            if (!isMouseDown && velocityX < 0.001){
                velocityX = 0;
            }
            renderer.render(scene, camera);
        };

        animate(0); // Start the animation loop

        // Cleanup on component unmount
        return () => {
            window.removeEventListener('mousedown', onMouseDown);
            window.removeEventListener('mouseup', onMouseUp);
            window.removeEventListener('mousemove', onMouseMove);

            if (model) {
                scene.remove(model);
                model.traverse((child) => {
                    if (child.geometry) child.geometry.dispose();
                    if (child.material) child.material.dispose();
                });
            }

            // Dispose of the WebGL renderer
            renderer.dispose();
        };
    }, []);

    return <canvas ref={canvasRef} style={{ position: 'absolute', top: 0, left: 0 }} />;
};

export default ThreeDModel;
