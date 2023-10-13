import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import c from './home.module.scss'
import landingImg from '../assets/landing-browser.png'
import frameImg from '../assets/course-mapper-browser.png'
import peerviewImg from '../assets/peerview-browser.png'
import library from '../assets/library-browser.png'

import transition from '../layout/transition'
import Footer from '../utils/Footer'

const Home = () => {
  useEffect(() => {
    let timer1 = setTimeout(() => window.scrollTo(0, 0), 0)

    return () => {
      clearTimeout(timer1)
    }
  }, [])

  return (
    <div>
      <div className={c.landing}>
        <div className={c.intro}>
          <div>Hello, I'm Ping Song,</div>
          <div>
            a principal{' '}
            <span className={[c.tag, c.one].join(' ')}>
              UX/UI&nbsp;Designer
            </span>
            and{' '}
            <span className={[c.tag, c.three].join(' ')}>
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
