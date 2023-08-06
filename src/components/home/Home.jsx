import { Link } from 'react-router-dom'
import c from './home.module.scss'
import { motion } from 'framer-motion'
import landingImg from '../assets/landing.png'
import frameImg from '../assets/frame.png'
import peerviewImg from '../assets/peerview.png'
import transition from '../layout/transition'
const Home = () => {
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
          <motion.span variants={intro}>
            Hello, I'm Ping Song, a ux/ui designer and developer, based in
            Melbourne, Australia.
          </motion.span>
        </motion.div>
        <motion.div
          className={c.projectContainer}
          variants={container}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={item} className={[c.project, c.one].join(' ')}>
            <Link to={'/monash-student-apps'}>
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
        </motion.div>
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
          <div>
            I love
            <span className={[c.tag, c.four].join(' ')}>
              Making&nbsp;things
            </span>
            , and in my free time, I enjoy drawing pixel art and crocheting.
          </div>
          <div>
            If you are interested in my experience, you can pay a visit to my{' '}
            <a
              href="https://www.linkedin.com/in/ping-song-pson0001/"
              target="_blank"
              rel="noreferrer"
            >
              {' '}
              Linkedin{' '}
              <svg
                aria-hidden="true"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="#000"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path
                  d="M10 4H6.46154C5.8087 4 5.1826 4.25934 4.72097 4.72097C4.25934 5.1826 4 5.8087 4 6.46154V17.5385C4 18.1913 4.25934 18.8174 4.72097 19.279C5.1826 19.7407 5.8087 20 6.46154 20H17.5385C18.1913 20 18.8174 19.7407 19.279 19.279C19.7407 18.8174 20 18.1913 20 17.5385V14"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                />
                <path
                  d="M10 14L20 4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                />
                <path
                  d="m15 4h5v5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                />
              </svg>
            </a>{' '}
            profile. Thank you for stopping by!
          </div>
        </div>
      </div>

      <div className={c.viewProject}>
        <Link to={'/monash-student-apps'}>
          <h2>VIEW PROJECT - STUDENT PORTAL</h2>
          <div className={c.arrow}></div>
        </Link>
      </div>
    </motion.div>
  )
}

export default transition(Home)
