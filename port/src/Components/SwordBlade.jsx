import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF, Preload } from '@react-three/drei';

const HeadModel = () => {
  const model = useGLTF('./src/assets/planes_of_head_male/scene.gltf');

  return (
    <primitive
      object={model.scene}
      scale={1}                    // Smaller scale fits in camera better
      position={[0, -0.2, 0]}        // Slightly lowered so it doesn't clip
      rotation={[0, 0, 0]}
    />
  );
};

const HeadCanvas = () => {
  return (
    <Canvas
      frameloop="demand"
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 50,
        near: 0.1,
        far: 100,
        position: [0, 0, 7],         // Centered directly in front
      }}
    >
      <Suspense fallback={null}>
        <OrbitControls
          autoRotate
          autoRotateSpeed={10}
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <ambientLight intensity={0.6} />
        <directionalLight position={[0, 5, 5]} intensity={1} />
        <HeadModel />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default HeadCanvas;
