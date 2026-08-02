import { useEffect } from 'react'

// Smooth cursor torch using requestAnimationFrame and lerp for trailing
export default function CursorTorch() {
  useEffect(() => {
    const torch = document.createElement('div')
    torch.id = 'cursor-torch'
    document.body.appendChild(torch)

    let mouseX = window.innerWidth / 2
    let mouseY = window.innerHeight / 2
    let tx = mouseX
    let ty = mouseY
    let rafId = null

    const lerp = (a, b, n) => (1 - n) * a + n * b

    const onMove = (e) => {
      mouseX = e.clientX
      mouseY = e.clientY
    }

    const loop = () => {
      // smooth follow
      tx = lerp(tx, mouseX, 0.22)
      ty = lerp(ty, mouseY, 0.22)
      // center the torch element
      const w = torch.offsetWidth || 300
      const h = torch.offsetHeight || 300
      torch.style.transform = `translate(${tx - w / 2}px, ${ty - h / 2}px)`
      rafId = requestAnimationFrame(loop)
    }

    // hide on touch devices (optional) and small screens
    const shouldEnable = () => window.matchMedia('(pointer: fine) and (min-width: 640px)').matches
    if (shouldEnable()) {
      document.addEventListener('mousemove', onMove)
      rafId = requestAnimationFrame(loop)
    }

    // Resize handler to keep torch centered on next move
    const onResize = () => {
      mouseX = window.innerWidth / 2
      mouseY = window.innerHeight / 2
      tx = mouseX
      ty = mouseY
    }
    window.addEventListener('resize', onResize)

    return () => {
      document.removeEventListener('mousemove', onMove)
      window.removeEventListener('resize', onResize)
      if (rafId) cancelAnimationFrame(rafId)
      torch.remove()
    }
  }, [])

  return null
}
