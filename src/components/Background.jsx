import { useEffect, useRef } from 'react'
import * as THREE from 'three'

export default function Background() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

    const scene = new THREE.Scene()
    scene.background = new THREE.Color(0x14120d)
    scene.fog = new THREE.Fog(0x14120d, 45, 120)

    const camera = new THREE.PerspectiveCamera(50, 1, 0.1, 300)

    scene.add(new THREE.AmbientLight(0xffffff, 0.6))
    const dirLight = new THREE.DirectionalLight(0xffd9a8, 0.9)
    dirLight.position.set(20, 40, 15)
    scene.add(dirLight)
    scene.add(new THREE.GridHelper(220, 110, 0x5a4a30, 0x2b2518))

    const F = 12
    const H = 2.4
    const floors = []

    const slabM = new THREE.MeshStandardMaterial({ color: 0xcfc8b8, roughness: 0.8 })
    const colM = new THREE.MeshStandardMaterial({ color: 0x8a8272, roughness: 0.9 })
    const glassM = new THREE.MeshStandardMaterial({
      color: 0x3a5a70,
      transparent: true,
      opacity: 0.5,
      roughness: 0.2,
    })
    const yM = new THREE.MeshStandardMaterial({ color: 0xd9762b, roughness: 0.6 })

    for (let i = 0; i < F; i++) {
      const g = new THREE.Group()
      g.position.y = i * H

      const slab = new THREE.Mesh(new THREE.BoxGeometry(14, 0.4, 10), slabM)
      slab.position.y = 0.2
      g.add(slab)

      for (let x = 0; x < 4; x++) {
        for (let z = 0; z < 3; z++) {
          const col = new THREE.Mesh(new THREE.BoxGeometry(0.5, H - 0.4, 0.5), colM)
          col.position.set(-6.5 + (x * 13) / 3, 0.4 + (H - 0.4) / 2, -4.5 + z * 4.5)
          g.add(col)
        }
      }

      const glass = new THREE.Mesh(new THREE.BoxGeometry(13.4, H - 0.5, 9.4), glassM)
      glass.position.y = 0.4 + (H - 0.5) / 2
      g.add(glass)

      g.visible = false
      scene.add(g)
      floors.push(g)
    }

    for (let i = 0; i < 16; i++) {
      const h = 4 + Math.random() * 18
      const a = Math.random() * 6.28
      const d = 32 + Math.random() * 45
      const building = new THREE.Mesh(
        new THREE.BoxGeometry(5 + Math.random() * 5, h, 5 + Math.random() * 5),
        new THREE.MeshStandardMaterial({ color: 0x2a261c, roughness: 1 })
      )
      building.position.set(Math.cos(a) * d, h / 2, Math.sin(a) * d)
      scene.add(building)
    }

    const crane = new THREE.Group()
    crane.position.set(11, 0, -8)
    scene.add(crane)

    const mH = F * H + 5
    const mast = new THREE.Mesh(new THREE.BoxGeometry(1, mH, 1), yM)
    mast.position.y = mH / 2
    crane.add(mast)

    const top = new THREE.Group()
    top.position.y = mH
    crane.add(top)

    const jib = new THREE.Mesh(new THREE.BoxGeometry(24, 0.6, 0.6), yM)
    jib.position.x = -6
    top.add(jib)

    const counterweight = new THREE.Mesh(new THREE.BoxGeometry(2.5, 1.6, 1.6), colM)
    counterweight.position.x = 8
    top.add(counterweight)

    const cab = new THREE.Mesh(new THREE.BoxGeometry(1.4, 1.4, 1.4), yM)
    cab.position.set(1, 1, 0)
    top.add(cab)

    const rope = new THREE.Mesh(new THREE.BoxGeometry(0.08, 8, 0.08), colM)
    rope.position.set(-14, -4, 0)
    top.add(rope)

    const load = new THREE.Mesh(new THREE.BoxGeometry(1.6, 0.8, 1.6), yM)
    load.position.set(-14, -8.4, 0)
    top.add(load)

    const resize = () => {
      renderer.setSize(window.innerWidth, window.innerHeight, false)
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
    }
    window.addEventListener('resize', resize)
    resize()

    const slow = window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 0.3 : 1
    const L = F * 2 + 6
    const start = performance.now()
    let frameId

    const loop = () => {
      const t = ((performance.now() - start) / 1000) * slow
      const cy = t % L

      floors.forEach((g, i) => {
        const p = (cy - i * 2) / 1.5
        g.visible = p > 0 && cy < L - 2
        g.scale.y = Math.max(0.01, Math.min(1, p))
      })

      top.rotation.y = Math.sin(t * 0.25) * 0.7

      const a = t * 0.06
      const sy = window.scrollY * 0.012
      camera.position.set(Math.cos(a) * 40, 14 + sy, Math.sin(a) * 40)
      camera.lookAt(0, 12, 0)
      renderer.render(scene, camera)
      frameId = requestAnimationFrame(loop)
    }
    loop()

    return () => {
      cancelAnimationFrame(frameId)
      window.removeEventListener('resize', resize)
      scene.traverse((obj) => {
        if (obj.geometry) obj.geometry.dispose()
        if (obj.material) {
          const materials = Array.isArray(obj.material) ? obj.material : [obj.material]
          materials.forEach((m) => m.dispose())
        }
      })
      renderer.dispose()
    }
  }, [])

  return (
    <>
      <canvas id="bg3d" ref={canvasRef} />
      <video
        id="bgvideo"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        onError={(e) => {
          e.currentTarget.style.display = 'none'
        }}
      >
        <source src="construction.mp4" type="video/mp4" />
      </video>
      <div className="tint" />
    </>
  )
}
