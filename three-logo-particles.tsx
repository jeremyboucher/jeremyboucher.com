"use client"

import { useRef, useEffect, useState } from "react"
import { LOGO1_PATH, LOGO2_PATH, LOGO3_PATH } from "./logo-paths"

export default function Component() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const mousePositionRef = useRef({ x: 0, y: 0 })
  const isTouchingRef = useRef(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const updateCanvasSize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      setIsMobile(window.innerWidth < 768)
    }

    updateCanvasSize()

    let particles: {
      x: number
      y: number
      baseX: number
      baseY: number
      size: number
      color: string
      scatteredColor: string
      life: number
      logoIndex: number
    }[] = []

    let textImageData: ImageData | null = null

    function createTextImage() {
      if (!ctx || !canvas) return 0

      ctx.fillStyle = "white"
      ctx.save()

      const logoHeight = isMobile ? 100 : 160
      const logo1Width = logoHeight * (19 / 19) // Square aspect ratio
      const logo2Width = logoHeight * (194 / 211) // Lightning bolt aspect ratio
      const logo3Width = logoHeight * (70 / 65) // Star aspect ratio

      const logoSpacing = isMobile ? 40 : 80
      const totalWidth = logo1Width + logo2Width + logo3Width + logoSpacing * 2

      ctx.translate(canvas.width / 2 - totalWidth / 2, canvas.height / 2 - logoHeight / 2)

      // Draw Logo 1 (geometric pattern)
      ctx.save()
      const logo1Scale = logoHeight / 19
      ctx.scale(logo1Scale, logo1Scale)
      const path1 = new Path2D(LOGO1_PATH)
      ctx.fill(path1)
      ctx.restore()

      // Draw Logo 2 (lightning bolt)
      ctx.save()
      ctx.translate(logo1Width + logoSpacing, 0)
      const logo2Scale = logoHeight / 211
      ctx.scale(logo2Scale, logo2Scale)
      const path2 = new Path2D(LOGO2_PATH)
      ctx.fill(path2)
      ctx.restore()

      // Draw Logo 3 (star)
      ctx.save()
      ctx.translate(logo1Width + logo2Width + logoSpacing * 2, 0)
      const logo3Scale = logoHeight / 65
      ctx.scale(logo3Scale, logo3Scale)
      const path3 = new Path2D(LOGO3_PATH)
      ctx.fill(path3)
      ctx.restore()

      ctx.restore()

      textImageData = ctx.getImageData(0, 0, canvas.width, canvas.height)
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      return Math.max(logo1Scale, logo2Scale, logo3Scale)
    }

    function createParticle(scale: number) {
      if (!ctx || !canvas || !textImageData) return null

      const data = textImageData.data

      for (let attempt = 0; attempt < 100; attempt++) {
        const x = Math.floor(Math.random() * canvas.width)
        const y = Math.floor(Math.random() * canvas.height)

        if (data[(y * canvas.width + x) * 4 + 3] > 128) {
          const logoHeight = isMobile ? 100 : 160
          const logo1Width = logoHeight * (19 / 19)
          const logo2Width = logoHeight * (194 / 211)
          const logo3Width = logoHeight * (70 / 65)
          const logoSpacing = isMobile ? 40 : 80
          const totalWidth = logo1Width + logo2Width + logo3Width + logoSpacing * 2
          const centerX = canvas.width / 2

          // Determine which logo this particle belongs to
          let logoIndex = 0
          let scatteredColor = "#FF6B6B" // Default red for logo 1

          const logo1End = centerX - totalWidth / 2 + logo1Width
          const logo2End = logo1End + logoSpacing + logo2Width

          if (x <= logo1End) {
            logoIndex = 0
            scatteredColor = "#FF6B6B" // Red for logo 1
          } else if (x <= logo2End) {
            logoIndex = 1
            scatteredColor = "#4ECDC4" // Teal for logo 2
          } else {
            logoIndex = 2
            scatteredColor = "#FFE66D" // Yellow for logo 3
          }

          return {
            x: x,
            y: y,
            baseX: x,
            baseY: y,
            size: Math.random() * 1 + 0.5,
            color: "white",
            scatteredColor: scatteredColor,
            logoIndex: logoIndex,
            life: Math.random() * 100 + 50,
          }
        }
      }

      return null
    }

    function createInitialParticles(scale: number) {
      const baseParticleCount = 8000
      const particleCount = Math.floor(baseParticleCount * Math.sqrt((canvas.width * canvas.height) / (1920 * 1080)))
      for (let i = 0; i < particleCount; i++) {
        const particle = createParticle(scale)
        if (particle) particles.push(particle)
      }
    }

    let animationFrameId: number

    function animate(scale: number) {
      if (!ctx || !canvas) return
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      ctx.fillStyle = "black"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      const { x: mouseX, y: mouseY } = mousePositionRef.current
      const maxDistance = 240

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i]
        const dx = mouseX - p.x
        const dy = mouseY - p.y
        const distance = Math.sqrt(dx * dx + dy * dy)

        if (distance < maxDistance && (isTouchingRef.current || !("ontouchstart" in window))) {
          const force = (maxDistance - distance) / maxDistance
          const angle = Math.atan2(dy, dx)
          const moveX = Math.cos(angle) * force * 60
          const moveY = Math.sin(angle) * force * 60
          p.x = p.baseX - moveX
          p.y = p.baseY - moveY

          ctx.fillStyle = p.scatteredColor
        } else {
          p.x += (p.baseX - p.x) * 0.1
          p.y += (p.baseY - p.y) * 0.1
          ctx.fillStyle = "white"
        }

        ctx.fillRect(p.x, p.y, p.size, p.size)

        p.life--
        if (p.life <= 0) {
          const newParticle = createParticle(scale)
          if (newParticle) {
            particles[i] = newParticle
          } else {
            particles.splice(i, 1)
            i--
          }
        }
      }

      const baseParticleCount = 8000
      const targetParticleCount = Math.floor(
        baseParticleCount * Math.sqrt((canvas.width * canvas.height) / (1920 * 1080)),
      )
      while (particles.length < targetParticleCount) {
        const newParticle = createParticle(scale)
        if (newParticle) particles.push(newParticle)
      }

      animationFrameId = requestAnimationFrame(() => animate(scale))
    }

    const scale = createTextImage()
    createInitialParticles(scale)
    animate(scale)

    const handleResize = () => {
      updateCanvasSize()
      const newScale = createTextImage()
      particles = []
      createInitialParticles(newScale)
    }

    const handleMove = (x: number, y: number) => {
      mousePositionRef.current = { x, y }
    }

    const handleMouseMove = (e: MouseEvent) => {
      handleMove(e.clientX, e.clientY)
    }

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        e.preventDefault()
        handleMove(e.touches[0].clientX, e.touches[0].clientY)
      }
    }

    const handleTouchStart = () => {
      isTouchingRef.current = true
    }

    const handleTouchEnd = () => {
      isTouchingRef.current = false
      mousePositionRef.current = { x: 0, y: 0 }
    }

    const handleMouseLeave = () => {
      if (!("ontouchstart" in window)) {
        mousePositionRef.current = { x: 0, y: 0 }
      }
    }

    window.addEventListener("resize", handleResize)
    canvas.addEventListener("mousemove", handleMouseMove)
    canvas.addEventListener("touchmove", handleTouchMove, { passive: false })
    canvas.addEventListener("mouseleave", handleMouseLeave)
    canvas.addEventListener("touchstart", handleTouchStart)
    canvas.addEventListener("touchend", handleTouchEnd)

    return () => {
      window.removeEventListener("resize", handleResize)
      canvas.removeEventListener("mousemove", handleMouseMove)
      canvas.removeEventListener("touchmove", handleTouchMove)
      canvas.removeEventListener("mouseleave", handleMouseLeave)
      canvas.removeEventListener("touchstart", handleTouchStart)
      canvas.removeEventListener("touchend", handleTouchEnd)
      cancelAnimationFrame(animationFrameId)
    }
  }, [isMobile])

  return (
    <div className="relative w-full h-dvh flex flex-col items-center justify-center bg-black">
      <canvas
        ref={canvasRef}
        className="w-full h-full absolute top-0 left-0 touch-none"
        aria-label="Interactive particle effect with three custom logos"
      />
      <div className="absolute bottom-[100px] text-center z-10">
        <p className="font-mono text-gray-400 text-xs sm:text-base md:text-sm">
          Interactive particle logos
          <br />
          <span className="text-gray-500 text-xs mt-2.5 inline-block">Move your cursor to scatter the particles</span>
        </p>
      </div>
    </div>
  )
}
