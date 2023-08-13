import React, { useEffect } from 'react'

import transition from '../layout/transition'
import Footer from '../utils/Footer'
import c from './project.module.scss'
import library from '../assets/library-browser.png'
const Library = () => {
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
            <span className={c.title}>REACT COMPONENT LIBRARY</span>

            <span className={c.subLabel}>RESPONSIBILITY</span>
            <span className={c.subTitle}>
              UI Design, Frontend Development, Accessibility Testing
            </span>
          </div>
          <div className={c.projectIntro}>
            <span className={c.subLabel}>OVERVIEW</span>
            <span className={c.subTitle}>
              Recognizing the potential for numerous reusable components, two
              other developers and I started on creating a Monash React
              component library. This initiative aims to facilitate component
              sharing across different projects, streamlining development
              efforts and avoiding unnecessary duplication of work.
            </span>
            <span className={c.subTitle}>
              Throughout this process, I've gained valuable insights into
              function extraction, optimal naming conventions, and enhanced
              understanding of accessibility principles. These lessons have not
              only enriched my design and development skills but also equipped
              me with the ability to create more efficient, user-friendly, and
              inclusive digital experiences.
            </span>
          </div>
        </div>
        <div className={c.projectImg}>
          <img src={library} alt="peerview" />
        </div>
      </div>
      <Footer
        left={{ to: '/monash-peerview', name: 'PEERVIEW' }}
        right={{
          to: '/',
          name: 'BACK TO HOME',
        }}
      />
    </>
  )
}

export default transition(Library)
