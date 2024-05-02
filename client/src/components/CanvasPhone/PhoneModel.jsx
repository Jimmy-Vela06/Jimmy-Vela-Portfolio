import React, { Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';

import scene from './assets/scene.gltf';

const PhoneModel = () => {
  const iphone = useGLTF(scene);
  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor='' />
      <pointLight intensity={0.2} />
      <spotLight position={[-25, 40, 25]} color='#FDB813' />

      <primitive object={iphone.scene} scale={0.75} position={[0, -0.6, 0]} rotation={[0, 0, 0]} />
    </mesh>
  );
};

const PhoneModelCanvas = () => {
  return (
    <Canvas frameloop='demand' shadows dpr={[3, 2]} camera={{ position: [11, 8, 16], fov: 12 }} gl={{ preserveDrawingBuffer: true }}>
      <Suspense>
        <OrbitControls
          autoRotate
          autoRotateSpeed={3}
          rotation={1}
          rotateSpeed={2}
          enableZoom={false}
          enablePan={false}
          minPolarAngle={Math.PI / 2.5}
          maxPolarAngle={Math.PI / 2}
        />
        <PhoneModel />
      </Suspense>
    </Canvas>
  );
};

export default PhoneModelCanvas;
