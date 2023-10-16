import React, { useRef, useEffect, useState } from 'react'
import useWindowSize from '../utils/use-window-size'

const Canvas = (props) => {
  const {
    // width = '100%',
    // height = '100%',
    draw,
    establishContext,
    establishCanvasWidth,
    ...rest
  } = props
  const canvasRef = useRef()
  const [context, setContext] = useState(null)
  const windowSize = useWindowSize()

  useEffect(() => {
    if (canvasRef.current) {
      const ctx = canvasRef.current.getContext('2d')

      if (ctx) {
        ctx.canvas.width = window.innerWidth
        ctx.canvas.height = window.innerHeight
      }
      setContext(ctx)
      if (establishContext) {
        establishContext(ctx)
      }
      if (establishCanvasWidth) {
        establishCanvasWidth(ctx.canvas.width)
      }
    }
  }, [canvasRef, establishCanvasWidth, establishContext, windowSize])

  const resizeCanvas = (context) => {
    const canvas = context.canvas
    const { width, height } = canvas.getBoundingClientRect()

    if (canvas.width !== width || canvas.height !== height) {
      const { devicePixelRatio: ratio = 1 } = window
      canvas.width = width * ratio
      canvas.height = height * ratio
      context.scale(ratio, ratio)
      return true
    }
    return false
  }

  useEffect(() => {
    // let frameCount = 0
    let animationFrameId

    // Check if null context has been replaced on component mount
    if (context) {
      //Our draw came here
      const render = () => {
        // frameCount++
        draw()
        resizeCanvas(context)

        animationFrameId = window.requestAnimationFrame(render)
      }
      render()
    }
    return () => {
      window.cancelAnimationFrame(animationFrameId)
    }
  }, [draw, context])

  return <canvas ref={canvasRef} {...rest} />
}

export default Canvas
