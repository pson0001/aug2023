import React, { useEffect } from 'react'

import transition from '../layout/transition'
import Footer from '../utils/Footer'
import c from './project.module.scss'
const Peerview = () => {
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
            <span className={c.subTitle}>-</span>
          </div>
        </div>{' '}
      </div>
      <Footer
        right={{
          to: '/',
          name: 'BACK TO HOME',
        }}
      />
    </>
  )
}

export default transition(Peerview)
