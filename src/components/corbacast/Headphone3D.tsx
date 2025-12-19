"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

const Headphone3D = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // --- SCENE SETUP ---
    const scene = new THREE.Scene();
    const width = containerRef.current.clientWidth;
    const height = containerRef.current.clientHeight;

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.set(0, 0, 10);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;

    // Clear any previous elements to prevent doubling
    containerRef.current.innerHTML = "";
    containerRef.current.appendChild(renderer.domElement);

    // --- CONTROLS ---
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.autoRotate = true;
    controls.autoRotateSpeed = 2;
    controls.enableZoom = false; // Disable zoom for better landing page feel
    controls.minPolarAngle = Math.PI / 4;
    controls.maxPolarAngle = Math.PI / 1.5;

    // --- LIGHTS ---
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);

    const spotLight = new THREE.SpotLight(0xffffff, 1.5);
    spotLight.position.set(10, 15, 10);
    spotLight.castShadow = true;
    scene.add(spotLight);

    const backLight = new THREE.DirectionalLight(0xffffff, 0.5);
    backLight.position.set(-10, -5, -10);
    scene.add(backLight);

    // --- MATERIALS ---
    const materials = {
      plastic: new THREE.MeshStandardMaterial({ color: "#1a1a2e", roughness: 0.4, metalness: 0.2 }),
      cushion: new THREE.MeshStandardMaterial({ color: "#0f0f1a", roughness: 0.9, metalness: 0.0 }),
      metal: new THREE.MeshStandardMaterial({ color: "#e0e0e0", roughness: 0.1, metalness: 0.9 }),
      accent: new THREE.MeshStandardMaterial({
        color: "#ff4757",
        roughness: 0.2,
        metalness: 0.5,
        emissive: "#ff4757",
        emissiveIntensity: 0.3
      })
    };

    // --- MODEL CONSTRUCTION ---
    const headphoneGroup = new THREE.Group();

    // Headband
    const headbandGeometry = new THREE.TorusGeometry(1.3, 0.15, 16, 64, Math.PI);
    const headband = new THREE.Mesh(headbandGeometry, materials.plastic);
    headband.position.y = 1.8;
    headphoneGroup.add(headband);

    const paddingGeometry = new THREE.TorusGeometry(1.3, 0.12, 16, 64, Math.PI);
    const padding = new THREE.Mesh(paddingGeometry, materials.cushion);
    padding.position.y = 1.78;
    headphoneGroup.add(padding);

    // Sides helper function
    const createSide = (side: number) => {
      const sideGroup = new THREE.Group();

      // Arm
      const armGeom = new THREE.CylinderGeometry(0.08, 0.08, 1.4, 32);
      const arm = new THREE.Mesh(armGeom, materials.metal);
      arm.position.y = 0.6;
      sideGroup.add(arm);

      // Yoke
      const yokeGroup = new THREE.Group();
      yokeGroup.position.y = -0.2;

      const yokeTopGeom = new THREE.CylinderGeometry(0.07, 0.07, 0.5, 16);
      const yokeTop = new THREE.Mesh(yokeTopGeom, materials.plastic);
      yokeTop.rotation.z = Math.PI / 2;
      yokeTop.position.y = 0.2;
      yokeGroup.add(yokeTop);

      const yokeArmGeom = new THREE.CapsuleGeometry(0.07, 0.6, 4, 8);
      const yokeL = new THREE.Mesh(yokeArmGeom, materials.plastic);
      yokeL.position.x = -0.25; yokeL.position.y = -0.2;
      yokeGroup.add(yokeL);

      const yokeR = new THREE.Mesh(yokeArmGeom, materials.plastic);
      yokeR.position.x = 0.25; yokeR.position.y = -0.2;
      yokeGroup.add(yokeR);

      sideGroup.add(yokeGroup);

      // Ear cup
      const cupGroup = new THREE.Group();
      cupGroup.position.y = -0.6;
      cupGroup.rotation.z = side * 0.1;

      const housingGeom = new THREE.CylinderGeometry(0.7, 0.7, 0.4, 32);
      const housing = new THREE.Mesh(housingGeom, materials.plastic);
      housing.rotation.z = Math.PI / 2;
      cupGroup.add(housing);

      const accentRingGeom = new THREE.TorusGeometry(0.5, 0.02, 16, 32);
      const accentRing = new THREE.Mesh(accentRingGeom, materials.accent);
      accentRing.rotation.y = Math.PI / 2;
      accentRing.position.x = side * 0.21; // Move to outside
      cupGroup.add(accentRing);

      const cushionGeom = new THREE.TorusGeometry(0.55, 0.2, 16, 64);
      const cushion = new THREE.Mesh(cushionGeom, materials.cushion);
      cushion.rotation.y = Math.PI / 2;
      cushion.position.x = side * -0.2; // Move to inside
      cupGroup.add(cushion);

      // Inner mesh plate for realism
      const innerMeshGeom = new THREE.CylinderGeometry(0.5, 0.5, 0.05, 32);
      const innerMesh = new THREE.Mesh(innerMeshGeom, new THREE.MeshStandardMaterial({ color: "#000000" }));
      innerMesh.rotation.z = Math.PI / 2;
      innerMesh.position.x = side * -0.15;
      cupGroup.add(innerMesh);

      sideGroup.add(cupGroup);
      return sideGroup;
    };

    const leftSide = createSide(-1);
    leftSide.position.x = -1.35;
    leftSide.position.y = 0.6;
    headphoneGroup.add(leftSide);

    const rightSide = createSide(1);
    rightSide.position.x = 1.35;
    rightSide.position.y = 0.6;
    headphoneGroup.add(rightSide);

    headphoneGroup.scale.set(1.4, 1.4, 1.4);
    headphoneGroup.position.y = -1;
    scene.add(headphoneGroup);

    // --- ANIMATION ---
    const clock = new THREE.Clock();
    let animationId = 0;

    const animate = () => {
      animationId = requestAnimationFrame(animate);
      const elapsed = clock.getElapsedTime();

      // Hover effect
      headphoneGroup.position.y = -1 + Math.sin(elapsed) * 0.15;

      controls.update();
      renderer.render(scene, camera);
    };

    animate();

    // --- RESIZE HANDLER ---
    const handleResize = () => {
      if (!containerRef.current) return;
      const newWidth = containerRef.current.clientWidth;
      const newHeight = containerRef.current.clientHeight;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };

    window.addEventListener("resize", handleResize);

    // --- CLEANUP ---
    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationId);
      if (containerRef.current) {
        containerRef.current.removeChild(renderer.domElement);
      }
      // Dispose resources
      scene.clear();
      renderer.dispose();
      Object.values(materials).forEach(m => m.dispose());
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full h-full min-h-[400px] flex items-center justify-center relative cursor-grab active:cursor-grabbing touch-none"
    />
  );
};

export default Headphone3D;

