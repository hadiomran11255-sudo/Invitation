import { Canvas, useFrame } from '@react-three/fiber'
import { useRef } from 'react'

function GoldRing() {
  const ref = useRef()
  useFrame((state, delta) => {
    // visible motion: gentle tilt + spin
    ref.current.rotation.x = 0.18               
    ref.current.rotation.y += delta * 0.45     
    ref.current.rotation.z += delta * 0.9       
  })

  return (
    <mesh ref={ref} castShadow receiveShadow>
      {/* thin, elegant ring */}
      <torusGeometry args={[1.05, 0.06, 128, 512]} />
      <meshPhysicalMaterial
        color="#d4af37"          
        metalness={1}
        roughness={0.12}
        reflectivity={1}
        clearcoat={1}
        clearcoatRoughness={0.06}
        envMapIntensity={1}
      />
    </mesh>
  )
}

export default function RotatingRing({ className }) {
  return (
    <Canvas
      className={className}
      gl={{ antialias: true, alpha: true }}
      camera={{ position: [0, 0, 3.4], fov: 45 }}
      dpr={[1, 2]}
      shadows
      frameloop="always"
    >
      {/* lights arranged to create bright moving "glints" */}
      <ambientLight intensity={0.55} />
      <hemisphereLight skyColor={'#ffffff'} groundColor={'#666666'} intensity={0.8} />
      <pointLight position={[ 1.6,  0.6, 1.7]} intensity={3.0} />
      <pointLight position={[-1.6, -0.6, 1.7]} intensity={3.0} />
      <pointLight position={[ 0.0,  1.5, 1.4]} intensity={2.4} />
      <pointLight position={[ 0.0, -1.5, 1.4]} intensity={2.2} />
      <GoldRing />
    </Canvas>
  )
}
