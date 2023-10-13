import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import c from './home.module.scss'
import { motion } from 'framer-motion'
import landingImg from '../assets/landing.png'
import frameImg from '../assets/frame.png'
import peerviewImg from '../assets/peerview.png'
import transition from '../layout/transition'
import Footer from '../utils/Footer'
import Icon from '../assets/Icon'
import photoOne from '../assets/photoOne.jpg'
import boulderTwo from '../assets/boulderTwo.jpg'
import photoThree from '../assets/photoThree.jpg'
import flower from '../assets/flower.gif'
import yoda from '../assets/yoda.gif'
import boulderOne from '../assets/boulderOne.jpg'
import cat from '../assets/cat.jpg'
import mushroom from '../assets/mushroom.jpg'
const Home = () => {
  useEffect(() => {
    let timer1 = setTimeout(() => window.scrollTo(0, 0), 0)

    return () => {
      clearTimeout(timer1)
    }
  }, [])

  const container = {
    hidden: {
      y: 0,
    },
    visible: {
      y: 0,
      transition: {
        delayChildren: 0.1,
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { y: '50vh' },
    visible: {
      y: 0,
    },
  }

  const intro = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      duration: 0.6,
    },
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] }}
    >
      <div className={c.landing}>
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className={c.intro}
        >
          <motion.span variants={intro}>Hello, I'm Ping Song,</motion.span>
          <motion.span variants={intro}>
            a principal UX/UI designer and developer
          </motion.span>
          <motion.span variants={intro}>
            a principal UX/UI designer and developer
          </motion.span>
        </motion.div>
        {/* <motion.div
          className={c.projectContainer}
          variants={container}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={item} className={[c.project, c.one].join(' ')}>
            <Link to={'/monash-student-portal'}>
              <h1>STUDENT PORTAL</h1>

              <div className={c.label}>Monash University</div>
              <div className={c.projectImg}>
                <img src={landingImg} alt="landing" />
              </div>
            </Link>
          </motion.div>
          <motion.div variants={item} className={[c.project, c.two].join(' ')}>
            <Link to={'/monash-course-mapper'}>
              <h1>COURSE MAPPER</h1>
              <div className={c.label}>Monash University</div>
              <div className={c.projectImg}>
                <img src={frameImg} alt="landing" />
              </div>
            </Link>
          </motion.div>
          <motion.div
            variants={item}
            className={[c.project, c.three].join(' ')}
          >
            <Link to={'/monash-peerview'}>
              <h1>PEERVIEW</h1>
              <div className={c.label}>Monash University</div>
              <div className={c.projectImg}>
                <img src={peerviewImg} alt="landing" />
              </div>
            </Link>
          </motion.div>
          <motion.div variants={item} className={[c.project, c.four].join(' ')}>
            <Link to={'/monash-react-component-library'}>
              <h1>REACT COMPONENT LIBRARY</h1>
              <div className={c.label}>Yep, still Monash</div>
            </Link>
          </motion.div>
        </motion.div> */}
      </div>
      <div className={c.about}>
        <div className={c.aboutTitle}>
          <h2>A LITTLE ABOUT ME</h2>
        </div>
        <div className={c.aboutDetails}>
          <div>
            I’ve been doing
            <span className={[c.tag, c.one].join(' ')}>
              UX/UI&nbsp;design
            </span>{' '}
            for 5 years, currently working at Monash University.
          </div>
          <div>
            My journey in design began with a Bachelor's degree in
            <span className={[c.tag, c.two].join(' ')}>
              Industrial&nbsp;Design
            </span>
            from the University of New South Wales,
          </div>
          <div>
            followed by a Master's degree
            <span className={[c.tag, c.three].join(' ')}>
              Information&nbsp;Technology
            </span>
            from Monash University.
          </div>
        </div>
      </div>
      <div className={c.about}>
        <div className={c.aboutTitle}>
          <h2>MY VALUES</h2>
        </div>
        <div className={c.aboutDetails}>
          <div>
            Design with empathy, recognising needs and{' '}
            <span className={[c.tag, c.one].join(' ')}>emotions</span> for a
            human-centered experience.
          </div>
          <div>
            Spread <span className={[c.tag, c.two].join(' ')}>kindness</span>{' '}
            and support others to make the world a better place.
          </div>
          <div>
            Dream big, make it happen, or just get a
            <span className={[c.tag, c.three].join(' ')}>step&nbsp;closer</span>
            sometimes <span style={{ fontSize: '2rem' }}>🤷‍♀️</span>.
          </div>
          <div>
            Always <span className={[c.tag, c.four].join(' ')}>iterate</span>,{' '}
            because designers hate their old designs.
          </div>
        </div>
      </div>

      <div className={c.about}>
        <div className={c.aboutTitle}>
          <h2>MY FREE TIME</h2>
        </div>
        <div className={c.photoDetails}>
          <img className={c.photo} src={photoThree} alt="" />
          <img className={c.photo} src={flower} alt="" />
          <img className={c.photo} src={mushroom} alt="" />
          <img className={c.photo} src={yoda} alt="" />
          <img className={c.photo} src={photoOne} alt="" />
          <img className={c.photo} src={boulderOne} alt="" />
          <img className={c.photo} src={cat} alt="" />
          <img className={c.photo} src={boulderTwo} alt="" />
        </div>
      </div>
      <div className={c.about}>
        <div>
          If you are interested in my experience, you can pay a visit to my{' '}
          <a
            href="https://www.linkedin.com/in/ping-song-pson0001/"
            target="_blank"
            rel="noreferrer"
          >
            {' '}
            Linkedin <Icon.External />
          </a>{' '}
          profile. Thank you for stopping by!
        </div>{' '}
      </div>
      <Footer
        right={{
          to: '/monash-student-portal',
          name: 'VIEW PROJECT - STUDENT PORTAL',
        }}
      />
    </motion.div>
  )
}

export default transition(Home)
