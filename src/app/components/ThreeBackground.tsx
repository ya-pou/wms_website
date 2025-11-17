"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function ThreeBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!canvasRef.current || !containerRef.current) return;
    console.log(canvasRef)
    const container = containerRef.current;
    console.log(container)
    const sizes = {
      width: container.clientWidth,
      height: container.clientHeight,
    };

    const scene = new THREE.Scene();

    // CAMERA
    const camera = new THREE.PerspectiveCamera(
      75,
      sizes.width / sizes.height,
      0.1,
      100
    );
    camera.position.set(0, 1.1, 10);
    scene.add(camera);

    // GEOMETRY + SHADER
    const planeGeometry = new THREE.PlaneGeometry(20, 20, 150, 150);

    const planeMaterial = new THREE.ShaderMaterial({
      uniforms: {
        uTime: { value: 0 },
        uElevation: { value: 0.482 }
      },
      vertexShader: `uniform float uTime;
        uniform float uElevation;
        attribute float aSize;

        varying float vPositionY;
        varying float vPositionZ;

        void main() {
            vec4 modelPosition = modelMatrix * vec4(position, 1.0);
            modelPosition.y = sin(modelPosition.x - uTime) * sin(modelPosition.z * 0.6 + uTime) * uElevation;

            vec4 viewPosition = viewMatrix * modelPosition;
            gl_Position = projectionMatrix * viewPosition;

            gl_PointSize = 2.0 * aSize;
            gl_PointSize *= ( 1.0 / - viewPosition.z );

            vPositionY = modelPosition.y;
            vPositionZ = modelPosition.z;
        }`,
      fragmentShader: `
        varying float vPositionY;
        varying float vPositionZ;

        void main() {
            float strength = (vPositionY + 0.25) * 0.3;
            gl_FragColor = vec4(0.169, 0.616, 0.976, strength);
        }`,
      transparent: true,
    });

    // Random attrs
    const planeSizesArray = new Float32Array(planeGeometry.attributes.position.count);
    for (let i = 0; i < planeSizesArray.length; i++) {
      planeSizesArray[i] = Math.random() * 4.0;
    }
    planeGeometry.setAttribute("aSize", new THREE.BufferAttribute(planeSizesArray, 1));

    const plane = new THREE.Points(planeGeometry, planeMaterial);
    plane.rotation.x = -Math.PI * 0.4;
    scene.add(plane);

    // RENDERER
    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      alpha: true
    });
    renderer.setSize(sizes.width, sizes.height);

    // RESIZE
    const onResize = () => {
      sizes.width = container.clientWidth;
      sizes.height = container.clientHeight;

      camera.aspect = sizes.width / sizes.height;
      camera.updateProjectionMatrix();

      renderer.setSize(sizes.width, sizes.height);
    };
    window.addEventListener("resize", onResize);

    // ANIMATE
    const clock = new THREE.Clock();

    const animate = () => {
      const elapsed = clock.getElapsedTime();
      planeMaterial.uniforms.uTime.value = elapsed;

      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener("resize", onResize);
      renderer.dispose();
      planeGeometry.dispose();
      planeMaterial.dispose();
    };
  }, []);

  return (
    <div ref={containerRef} className="absolute bottom-0 left-0 w-full h-full -z-1">
      <canvas
        ref={canvasRef}
        className="w-full h-full pointer-events-none"
      />
    </div>
  );
}