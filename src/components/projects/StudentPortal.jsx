import React, { useEffect } from 'react'

import transition from '../layout/transition'
import Footer from '../utils/Footer'
import c from './project.module.scss'
import landing from '../assets/landing-browser.png'
import Icon from '../assets/Icon'
const StudentApps = () => {
  useEffect(() => {
    let timer1 = setTimeout(() => window.scrollTo(0, 0), 0)

    return () => {
      clearTimeout(timer1)
    }
  }, [])
  return (
    <>
      <div className={c.projectContainer}>
        <div className={c.project}>
          <div className={c.projectTitle}>
            <span className={c.subLabel}>PROJECT NAME</span>
            <span className={c.title}>STUDENT PORTAL</span>

            <span className={c.subLabel}>RESPONSIBILITY</span>
            <span className={c.subTitle}>
              User research, UX/UI Design, Frontend Development, User Testing
            </span>
          </div>
          <div className={c.projectIntro}>
            <span className={c.subLabel}>OVERVIEW</span>
            <span className={c.subTitle}>
              As part of Monash University's "digital transformation," the
              student portal uplift has been a significant focus for our team.
              Our mission is to create a world-class digital experience that
              exceeds student expectations, providing seamless and intuitive
              interactions. By innovating and pushing boundaries, we aim to set
              a new standard of excellence, ensuring students' journey through
              the portal is exceptional.
            </span>
          </div>
        </div>
        <div className={c.projectImg}>
          <img src={landing} alt="landing" />
        </div>
        <div className={c.projectContent}>
          <div className={c.section}>
            <div className={c.title}>THE UPDATE</div>

            <div className={c.subSection}>
              <div className={c.description}>
                For the past year, I've been leading the design efforts for the
                new student portal project.
              </div>
              <div className={c.description}>
                We have initiated the recruitment of students for a pilot
                testing program. The pilot program successfully onboarded 4000
                students who actively participated in discovering bugs and
                providing valuable feedback. Their engagement has been
                instrumental in enhancing the portal's user experience and
                shaping its successful implementation.
              </div>
              <div className={c.description}>
                This project has been a labor of love, with tremendous effort
                dedicated to its success. The overwhelmingly positive feedback
                from students has been a testament to our hard work. We eagerly
                anticipate launching the portal in the second half of 2023,
                providing students with an outstanding digital experience.
              </div>

              <div className={c.description}>
                After the launch, I'll be updating this project with further
                developments. In the meantime, feel free to reach out if you're
                interested in knowing more. You can connect with me via{' '}
                <a
                  href="https://www.linkedin.com/in/ping-song-pson0001/"
                  target="_blank"
                  rel="noreferrer"
                >
                  {' '}
                  Linkedin <Icon.External />
                </a>
                .
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer
        right={{
          to: '/monash-course-mapper',
          name: 'COURSE MAPPER',
        }}
      />
    </>
  )
}

export default transition(StudentApps)
