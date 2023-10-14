import React, { useEffect } from 'react'

import transition from '../layout/transition'
import Footer from '../utils/Footer'
import c from './project.module.scss'
import landing from '../assets/landing-browser.png'
import Icon from '../assets/Icon'
import differences from '../assets/differences.png'
import current from '../assets/portal-current.png'
import future from '../assets/portal-future.png'

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
            <div className={c.title}>BACKGROUND</div>

            <div className={c.subSection}>
              <div className={c.description}>
                The university has made the decision to update the current
                23-year-old student management system as part of a digital
                transformation initiative. This presents a unique opportunity to
                reimagine and enhance the student experience.
              </div>
            </div>
          </div>

          <div className={c.section}>
            <div className={c.title}>UNDERSTAND</div>

            <div className={c.subSection}>
              <div>
                <div className={c.subTitle}>Every student is different…</div>
                <div className={c.projectImg}>
                  <img
                    src={differences}
                    alt="differences"
                    className={c.inline}
                  />
                </div>
                <div className={c.description}>
                  These individual differences influence the feelings, thoughts
                  and behaviours of different students, and in the context of
                  university, this means that different students are driven and
                  motivated by different things
                </div>
              </div>
            </div>
          </div>

          <div className={c.section}>
            <div className={c.title}>THE BIG GOAL</div>

            <div className={c.subSection}>
              <div className={c.subTitle}>High level student life cycle</div>
              <div className={c.arrowContainer}>
                <span>Prospective students</span>
                <Icon.ArrowRightSmall />
                <span>Enrolling students</span> <Icon.ArrowRightSmall />
                <span>Current students</span> <Icon.ArrowRightSmall />
                <span>Graduates</span>
              </div>

              <div>
                Mapping out the university experience into four stages reveals a
                comprehensive perspective. Understanding this high-level cycle
                is crucial in addressing overarching issues. Ultimately,
                students seek a sense of success during their university
                journey. A continuous and seamless digital experience plays a
                pivotal role in enabling this fulfillment.
              </div>
              <div className={c.projectImg}>
                <div className={c.subTitle}>Current</div>
                <img src={current} alt="current" className={c.slide} />

                <div className={c.subTitle}>Future</div>
                <img src={future} alt="future" className={c.slide} />
              </div>
            </div>
          </div>

          <div className={c.section}>
            <div className={c.title}>Coming soon...</div>

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
        left={{
          to: '/',
          name: 'HOME',
        }}
        right={{
          to: '/monash-course-mapper',
          name: 'COURSE MAPPER',
        }}
      />
    </>
  )
}

export default transition(StudentApps)
