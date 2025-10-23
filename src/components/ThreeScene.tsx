'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function ThreeScene() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);

    // Create floating objects with diverse shapes and materials
    const objects: THREE.Mesh[] = [];

    // Bunny-like objects (using sphere with modifications)
    const bunnyGeometry = new THREE.SphereGeometry(0.3, 8, 6);
    const bunnyMaterial = new THREE.MeshPhongMaterial({
      color: 0x6f9d92,
      shininess: 100,
      opacity: 0.8,
      transparent: true,
    });
    const bunny1 = new THREE.Mesh(bunnyGeometry, bunnyMaterial);
    const bunny2 = new THREE.Mesh(bunnyGeometry, bunnyMaterial);
    bunny1.position.set(-4, 3, -2);
    bunny2.position.set(4, -3, -1);
    objects.push(bunny1, bunny2);

    // Abstract curved shapes (using torus and tube geometries)
    const abstractGeometry1 = new THREE.TorusGeometry(0.4, 0.1, 8, 16);
    const abstractGeometry2 = new THREE.TorusKnotGeometry(0.3, 0.1, 64, 8, 2, 3);
    const abstractMaterial = new THREE.MeshPhongMaterial({
      color: 0xc3c297,
      shininess: 150,
      opacity: 0.7,
      transparent: true,
    });
    const abstract1 = new THREE.Mesh(abstractGeometry1, abstractMaterial);
    const abstract2 = new THREE.Mesh(abstractGeometry2, abstractMaterial);
    abstract1.position.set(3, 2, -1);
    abstract2.position.set(-3, -2, -2);
    objects.push(abstract1, abstract2);

    // Book-like objects (using box geometry)
    const bookGeometry = new THREE.BoxGeometry(0.3, 0.4, 0.1);
    const bookMaterial = new THREE.MeshPhongMaterial({
      color: 0x2a4a3a,
      shininess: 50,
      opacity: 0.8,
      transparent: true,
    });
    const book = new THREE.Mesh(bookGeometry, bookMaterial);
    book.position.set(-2, -4, -1);
    book.rotation.x = Math.PI / 6;
    objects.push(book);

    // Add all objects to scene
    objects.forEach(obj => scene.add(obj));

    // Add lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    const pointLight = new THREE.PointLight(0xc3c297, 1);
    pointLight.position.set(5, 5, 5);

    scene.add(ambientLight, pointLight);

    // Animation
    function animate() {
      requestAnimationFrame(animate);

      // Animate all objects with different rotation speeds
      objects.forEach((obj, index) => {
        const speed = 0.01 + (index * 0.002);
        obj.rotation.x += speed;
        obj.rotation.y += speed * 0.7;
        obj.rotation.z += speed * 0.3;
        
        // Add floating motion
        obj.position.y += Math.sin(Date.now() * 0.001 + index) * 0.002;
      });

      renderer.render(scene, camera);
    }

    animate();

    // Handle resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      container?.removeChild(renderer.domElement);
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed top-0 left-0 w-full h-full z-[100] pointer-events-none"
    />
  );
}
