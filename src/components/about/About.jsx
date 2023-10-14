import React, { useEffect } from 'react'
import c from './about.module.scss'

import transition from '../layout/transition'
import Footer from '../utils/Footer'
import Icon from '../assets/Icon'
import bag from '../assets/bag.jpg'
import boulderTwo from '../assets/boulderTwo.jpg'
import photoThree from '../assets/photoThree.jpg'
import flower from '../assets/flower.gif'
import yoda from '../assets/yoda.gif'
import boulderOne from '../assets/boulderOne.jpg'
import cat from '../assets/cat.jpg'
import mushroom from '../assets/mushroom.jpg'
import intro from '../assets/intro.png'

const About = () => {
  useEffect(() => {
    let timer1 = setTimeout(() => window.scrollTo(0, 0), 0)

    return () => {
      clearTimeout(timer1)
    }
  }, [])
  return (
    <>
      <div className={c.aboutContainer}>
        <div className={c.about}>
          <div className={c.photo}>
            <img src={intro} alt="" />
          </div>
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
              preceded by 2 years of experience in
              <span className={[c.tag, c.four].join(' ')}>
                branding&nbsp;design
              </span>{' '}
              .
            </div>
            <div></div>
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
              <span className={[c.tag, c.three].join(' ')}>
                step&nbsp;closer
              </span>
              sometimes <span style={{ fontSize: '2rem' }}>🤷‍♀️</span>.
            </div>
            <div>
              Always <span className={[c.tag, c.four].join(' ')}>iterate</span>{' '}
              ( because designers hate their old designs).
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
            <img className={c.photo} src={bag} alt="" />
            <img className={c.photo} src={boulderOne} alt="" />
            <img className={c.photo} src={cat} alt="" />
            <img className={c.photo} src={boulderTwo} alt="" />
          </div>
        </div>
        <div className={c.about}>
          <div className={c.aboutTitle}>
            <h2>MY CONTACT</h2>
          </div>
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
          </div>
        </div>
        <div className={c.about}>
          <div>© 2023 Design and developed by Ping Song</div>
        </div>
      </div>
      <Footer
        right={{
          to: '/',
          name: 'BACK TO HOME',
        }}
      />{' '}
    </>
  )
}

export default transition(About)
