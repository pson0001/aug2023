import React, { useEffect, useRef, useState, useCallback } from 'react'
import { Link } from 'react-router-dom'
import c from './home.module.scss'
import landingImg from '../assets/landing-browser.png'
import frameImg from '../assets/course-mapper-browser.png'
import peerviewImg from '../assets/peerview-browser.png'
import library from '../assets/library-browser.png'

import transition from '../layout/transition'
import Footer from '../utils/Footer'
import Canvas from './Canvas'

const Home = () => {
  useEffect(() => {
    let timer1 = setTimeout(() => window.scrollTo(0, 0), 0)

    return () => {
      clearTimeout(timer1)
    }
  }, [])

  const [ctx, setCtx] = useState(null)
  const [canvasWidth, setCanvasWidth] = useState(null)
  const establishContext = (context) => {
    setCtx(context)
  }

  const establishCanvasWidth = (width) => {
    setCanvasWidth(width)
  }

  var colors = ['#f6d1c5', '#7fd3e5']

  var gravity = 0.2
  var friction = 0.4

  // Utility Functions
  function randomIntFromRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

  function randomColor(colors) {
    return colors[Math.floor(Math.random() * colors.length)]
  }

  function Ball(x, y, dx, dy, radius, color) {
    this.x = x
    this.y = y
    this.dx = dx
    this.dy = dy
    this.radius = radius
    this.color = color

    this.update = function () {
      if (this.y + this.radius + this.dy > ctx.canvas.height) {
        this.dy = -this.dy
        this.dy = this.dy * friction
        this.dx = this.dx * friction
      } else {
        this.dy += gravity
      }

      if (
        this.x + this.radius >= ctx.canvas.width ||
        this.x - this.radius <= 0
      ) {
        this.dx = -this.dx * friction
      }

      this.x += this.dx
      this.y += this.dy
      this.draw()
    }

    this.draw = function () {
      ctx.beginPath()
      ctx.arc(this.x - 0.5, this.y - 10.5, this.radius, 0, Math.PI * 2, false)
      ctx.fillStyle = this.color
      ctx.fill()
      ctx.stroke()
      ctx.lineWidth = 1
      ctx.closePath()
    }
  }

  const ballArray = []
  const drawBalls = (pink = false, blue = false) => {
    for (let i = 0; i < 20; i++) {
      var radius = randomIntFromRange(8, 40)
      var x = randomIntFromRange(radius, ctx.canvas.width - radius)
      var y = 0
      var dx = randomIntFromRange(-3, 3)
      var dy = randomIntFromRange(-2, 2)
      if (pink) {
        ballArray.push(new Ball(x, y, dx, dy, radius, colors[0]))
      } else if (blue) {
        ballArray.push(new Ball(x, y, dx, dy, radius, colors[1]))
      } else {
        ballArray.push(new Ball(x, y, dx, dy, radius, randomColor(colors)))
      }
    }
  }
  // useEffect(() => {
  //   if (ctx) {
  //     //  drawBalls()
  //   }
  // }, [ctx])

  const draw = () => {
    if (ctx) {
      ctx.fillStyle = 'rgba(255,255,255)'
      ctx.fillRect(0.5, 0.5, ctx.canvas.width - 0.5, ctx.canvas.height - 0.5)

      for (let i = 0; i < ballArray.length; i++) {
        ballArray[i].update()
      }
    }
  }
  const drawPink = () => {
    drawBalls(true, false)
  }

  const drawBlue = () => {
    drawBalls(false, true)
  }

  return (
    <div className={c.landingContainer}>
      <div className={c.canvasContainer}>
        {/* <canvas ref={canvasRef}></canvas> */}
        <Canvas
          draw={draw}
          establishContext={establishContext}
          establishCanvasWidth={establishCanvasWidth}
        />
      </div>
      <div className={c.landing}>
        <div className={c.intro}>
          <div>Hello, I'm Ping Song,</div>
          <div>
            a passionate{' '}
            <span
              className={[c.tag, c.one, c.design].join(' ')}
              onClick={drawPink}
            >
              UX/UI&nbsp;Designer
            </span>
            and{' '}
            <span
              className={[c.tag, c.three, c.design].join(' ')}
              onClick={drawBlue}
            >
              Front&nbsp;end&nbsp;Developer
            </span>
          </div>
          <div>
            with 5 years of experience at Monash University, based in Australia
            🇦🇺.
          </div>
        </div>

        <div className={c.projectContainer}>
          <div className={c.project}>
            <Link to={'/monash-student-portal'}>
              <div className={c.projectImg}>
                <img src={landingImg} alt="landing" />
              </div>
              <div className={c.projectTitle}>
                {/* <div className={c.label}>Monash University</div> */}
                <h1>STUDENT PORTAL</h1>
                <div>
                  The New Monash University's student portal(hub) for over
                  80,000+ students
                </div>
              </div>
            </Link>
          </div>

          <div className={c.project}>
            <Link to={'/monash-course-mapper'}>
              <div className={c.projectImg}>
                <img src={frameImg} alt="landing" />
              </div>
              <div className={c.projectTitle}>
                {/* <div className={c.label}>Monash University</div> */}
                <h1>Course Mapper</h1>
                <div>
                  Generating over 60,000 personalized digital course plans for
                  students through the efforts of course advisers
                </div>
              </div>
            </Link>
          </div>

          <div className={c.project}>
            <Link to={'/monash-course-mapper'}>
              <div className={c.projectImg}>
                <img src={peerviewImg} alt="landing" />
              </div>
              <div className={c.projectTitle}>
                {/* <div className={c.label}>Monash University</div> */}
                <h1>Peerview</h1>
                <div>
                  Facilitating seamless academic peer review processes across 10
                  faculties at Monash University
                </div>
              </div>
            </Link>
          </div>

          <div className={c.project}>
            <Link to={'/monash-react-component-library'}>
              <div className={c.projectImg}>
                <img src={library} alt="landing" />
              </div>
              <div className={c.projectTitle}>
                {/* <div className={c.label}>Monash University</div> */}
                <h1>React Component Library</h1>
                <div>
                  Enabling component sharing across diverse projects, optimizing
                  development efforts, and preventing redundant work
                  duplication.
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <Footer
        right={{
          to: '/monash-student-portal',
          name: 'VIEW PROJECT - STUDENT PORTAL',
        }}
      />
    </div>
  )
}

export default transition(Home)
