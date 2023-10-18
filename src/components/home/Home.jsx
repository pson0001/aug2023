import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import c from './home.module.scss'
import landingImg from '../assets/landing-browser.png'
import frameImg from '../assets/course-mapper-browser.png'
import peerviewImg from '../assets/peerview-browser.png'
import library from '../assets/library-browser.png'

import transition from '../layout/transition'
import Footer from '../utils/Footer'
import Canvas from './Canvas'
import Icon from '../assets/Icon'
import useWindowSize from '../utils/use-window-size'

const Home = () => {
  useEffect(() => {
    let timer1 = setTimeout(() => window.scrollTo(0, 0), 0)

    return () => {
      clearTimeout(timer1)
    }
  }, [])

  const [ctx, setCtx] = useState(null)
  const [setCanvasWidth] = useState(null)
  const establishContext = (context) => {
    setCtx(context)
  }

  const establishCanvasWidth = (width) => {
    setCanvasWidth(width)
  }

  var colors = ['#ffd3cb', '#a2f1ff']

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
      var y = -40
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
  const windowSize = useWindowSize()
  // console.log(windowSize)
  const textRef = useRef()
  const arrowRef = useRef()

  let clickCounter = 0
  const textList = [
    'Click for fun!',
    'Wait, wrong button! Try this one',
    'hmm... how about scroll now',
    'No stop, just scroll...',
    'Please stoppppp',
    'Nooooooooooooo',
    'Someone needs to clean this up...',
    'Seriously????????',
    'ughhhhhhhh............',
  ]

  const drawPink = () => {
    console.log(clickCounter)

    if (textRef.current && arrowRef.current) {
      arrowRef.current.style.transform = `scaleX(-1)`
      arrowRef.current.style.left = `140px`
      textRef.current.style.left = `-40px`

      clickCounter++

      if (clickCounter >= textList.length) {
        textRef.current.innerText = 'ughhhhhhhh............'
      } else {
        textRef.current.innerText = textList[clickCounter]
      }
    }

    drawBalls(true, false)
  }

  const drawBlue = () => {
    clickCounter++
    if (textRef.current) {
      textRef.current.style.right = '0px'
      if (clickCounter >= textList.length) {
        textRef.current.innerText = 'ughhhhhhhh............'
      } else {
        textRef.current.innerText = textList[clickCounter]
      }
    }
    drawBalls(false, true)
  }

  return (
    <div className={c.landingContainer}>
      <div className={c.canvasContainer}>
        <Canvas
          draw={draw}
          establishContext={establishContext}
          establishCanvasWidth={establishCanvasWidth}
        />
      </div>
      <div className={c.landing}>
        <div className={c.intro}>
          <div>Hello, I'm Ping Song,</div>
          <div className={c.sentence}>
            {windowSize.width >= 650 && (
              <div className={c.textContainer}>
                <div ref={arrowRef} className={c.arrow}>
                  <Icon.ArrowHandDraw />
                </div>
                <div className={c.text} ref={textRef}>
                  Click for fun!
                </div>
              </div>
            )}
            a passionate{' '}
            <button
              className={[c.tag, c.one, c.design].join(' ')}
              onClick={drawPink}
            >
              <span className={c.tagText}>UX/UI&nbsp;Designer</span>
            </button>
            and{' '}
            <button
              className={[c.tag, c.three, c.design].join(' ')}
              onClick={drawBlue}
            >
              <span className={c.tagText}> Front&nbsp;end&nbsp;Developer </span>
            </button>
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
            <Link to={'/monash-peerview'}>
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
