import { useRef, useMemo, useEffect, useState } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Float, MeshDistortMaterial, Sphere, Stars } from '@react-three/drei'
import * as THREE from 'three'

/* ── Scroll-reactive glowing core sphere ── */
function CoreSphere({ scrollProgress }) {
  const meshRef = useRef()
  const glowRef = useRef()
  const innerGlowRef = useRef()

  useFrame((state) => {
    const t = state.clock.getElapsedTime()

    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(t * 0.2) * 0.3 + scrollProgress * 1.5
      meshRef.current.rotation.y = t * 0.1 + scrollProgress * 2
      meshRef.current.rotation.z = Math.cos(t * 0.15) * 0.1

      // Scale pulse based on scroll
      const scale = 1 + scrollProgress * 0.3 + Math.sin(t * 0.5) * 0.03
      meshRef.current.scale.setScalar(scale)
    }

    if (glowRef.current) {
      const glowScale = 1.15 + Math.sin(t * 0.8) * 0.05 + scrollProgress * 0.4
      glowRef.current.scale.setScalar(glowScale)
      glowRef.current.material.opacity = 0.06 + scrollProgress * 0.04
    }

    if (innerGlowRef.current) {
      const igScale = 0.85 + Math.sin(t * 1.2) * 0.03
      innerGlowRef.current.scale.setScalar(igScale)
    }
  })

  return (
    <group position={[0, 0, 0]}>
      {/* Inner glow core */}
      <Sphere ref={innerGlowRef} args={[1.6, 32, 32]}>
        <meshBasicMaterial color="#ff3d00" transparent opacity={0.08} />
      </Sphere>

      {/* Main distorted sphere */}
      <Float speed={1} rotationIntensity={0.2} floatIntensity={0.3}>
        <Sphere ref={meshRef} args={[2, 128, 128]}>
          <MeshDistortMaterial
            color="#ff6b35"
            roughness={0.1}
            metalness={0.95}
            distort={0.35}
            speed={1.8}
            envMapIntensity={1.5}
          />
        </Sphere>
      </Float>

      {/* Outer atmospheric glow */}
      <Sphere ref={glowRef} args={[2.6, 64, 64]}>
        <meshBasicMaterial
          color="#ff6b35"
          transparent
          opacity={0.06}
          side={THREE.BackSide}
        />
      </Sphere>

      {/* Second atmosphere layer */}
      <Sphere args={[3.2, 32, 32]}>
        <meshBasicMaterial
          color="#8b5cf6"
          transparent
          opacity={0.02}
          side={THREE.BackSide}
        />
      </Sphere>
    </group>
  )
}

/* ── Orbiting particle ring ── */
function ParticleRing({ scrollProgress }) {
  const ref = useRef()
  const count = 1200

  const [positions, sizes] = useMemo(() => {
    const pos = new Float32Array(count * 3)
    const sz = new Float32Array(count)
    for (let i = 0; i < count; i++) {
      const angle = (i / count) * Math.PI * 2
      const radius = 3.2 + Math.random() * 2
      const y = (Math.random() - 0.5) * 2.5
      pos[i * 3] = Math.cos(angle) * radius + (Math.random() - 0.5) * 0.5
      pos[i * 3 + 1] = y
      pos[i * 3 + 2] = Math.sin(angle) * radius + (Math.random() - 0.5) * 0.5
      sz[i] = Math.random() * 0.04 + 0.01
    }
    return [pos, sz]
  }, [])

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.getElapsedTime() * 0.04 + scrollProgress * 0.5
      ref.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.1) * 0.1
    }
  })

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.03}
        color="#ff8f5e"
        transparent
        opacity={0.7}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  )
}

/* ── Ambient dust particles that float everywhere ── */
function DustParticles({ scrollProgress }) {
  const ref = useRef()
  const count = 500

  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 20
      pos[i * 3 + 1] = (Math.random() - 0.5) * 15
      pos[i * 3 + 2] = (Math.random() - 0.5) * 15
    }
    return pos
  }, [])

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.getElapsedTime() * 0.01
      ref.current.position.y = -scrollProgress * 2
    }
  })

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.015}
        color="#ffffff"
        transparent
        opacity={0.25}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  )
}

/* ── Energy arcs / light streaks ── */
function EnergyArcs({ scrollProgress }) {
  const ref = useRef()

  const points = useMemo(() => {
    const pts = []
    for (let i = 0; i <= 80; i++) {
      const t = (i / 80) * Math.PI * 2
      const r = 4 + Math.sin(t * 3) * 0.5
      pts.push(new THREE.Vector3(
        Math.cos(t) * r,
        Math.sin(t * 2) * 0.8,
        Math.sin(t) * r
      ))
    }
    return pts
  }, [])

  const geometry = useMemo(() => {
    return new THREE.BufferGeometry().setFromPoints(points)
  }, [points])

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.getElapsedTime() * 0.05
      ref.current.rotation.x = scrollProgress * 0.3
    }
  })

  return (
    <line ref={ref} geometry={geometry}>
      <lineBasicMaterial
        color="#ff6b35"
        transparent
        opacity={0.15 + scrollProgress * 0.1}
        blending={THREE.AdditiveBlending}
      />
    </line>
  )
}

/* ── Scroll-reactive lighting ── */
function ScrollLights({ scrollProgress }) {
  const spotRef = useRef()
  const pointRef = useRef()

  useFrame(() => {
    if (spotRef.current) {
      spotRef.current.intensity = 0.8 + scrollProgress * 2
      spotRef.current.position.y = 8 - scrollProgress * 3
    }
    if (pointRef.current) {
      pointRef.current.intensity = 0.5 + scrollProgress * 1.5
    }
  })

  return (
    <>
      <ambientLight intensity={0.15} />
      <pointLight position={[5, 5, 5]} intensity={1.2} color="#ff6b35" distance={20} />
      <pointLight ref={pointRef} position={[-5, -3, -5]} intensity={0.5} color="#8b5cf6" distance={20} />
      <spotLight
        ref={spotRef}
        position={[0, 8, 0]}
        intensity={0.8}
        angle={0.4}
        penumbra={1}
        color="#ff6b35"
        distance={25}
      />
      <pointLight position={[0, -5, 3]} intensity={0.3} color="#ff3d00" distance={15} />
    </>
  )
}

/* ── Camera rig that subtly moves with scroll ── */
function CameraRig({ scrollProgress }) {
  const { camera } = useThree()

  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    // Subtle camera sway
    camera.position.x = Math.sin(t * 0.2) * 0.3
    camera.position.y = Math.cos(t * 0.15) * 0.2 + scrollProgress * -1
    camera.position.z = 7 - scrollProgress * 1.5
    camera.lookAt(0, 0, 0)
  })

  return null
}

/* ── Main exported component ── */
export default function HeroScene() {
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight
      const progress = Math.min(window.scrollY / (maxScroll * 0.3), 1) // React to first 30% of page scroll
      setScrollProgress(progress)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div style={{
      width: '100%',
      height: '100vh',
      position: 'fixed',
      top: 0,
      left: 0,
      zIndex: 0,
      pointerEvents: 'none',
    }}>
      <Canvas
        camera={{ position: [0, 0, 7], fov: 60 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
        style={{ background: 'transparent' }}
      >
        <ScrollLights scrollProgress={scrollProgress} />
        <CameraRig scrollProgress={scrollProgress} />

        <CoreSphere scrollProgress={scrollProgress} />
        <ParticleRing scrollProgress={scrollProgress} />
        <DustParticles scrollProgress={scrollProgress} />
        <EnergyArcs scrollProgress={scrollProgress} />

        <Stars radius={60} depth={60} count={3000} factor={3} saturation={0} fade speed={0.5} />

        <fog attach="fog" args={['#050508', 6, 22]} />
      </Canvas>
    </div>
  )
}
