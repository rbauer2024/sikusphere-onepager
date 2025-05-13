/// <reference types="@react-three/fiber" />
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Environment } from '@react-three/drei'
import { Suspense } from 'react'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { useLoader } from '@react-three/fiber'

function Model() {
  const gltf = useLoader(GLTFLoader, '/models/SikuSphere3D.glb')
  // @ts-ignore
  return <primitive object={gltf.scene} scale={1.5} />
}

export default function ModelViewer() {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
      {/* @ts-ignore */}
      <ambientLight intensity={0.4} />
      {/* @ts-ignore */}
      <directionalLight position={[10, 10, 5]} intensity={1.5} />
      <Suspense fallback={null}>
        <Model />
        <Environment preset="sunset" />
      </Suspense>
      <OrbitControls />
    </Canvas>
  )
}
