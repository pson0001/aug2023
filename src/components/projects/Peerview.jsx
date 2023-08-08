import React, { useEffect } from 'react'
import c from './project.module.scss'
import transition from '../layout/transition'
import peerview from '../assets/peerview-browser.png'
import dls from '../assets/dls.png'
import sitemap from '../assets/sitemap.png'
import ui from '../assets/ui.png'
import userflow from '../assets/userflow.png'
import wireframe from '../assets/wireframe.png'
import Footer from '../utils/Footer'
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
            <span className={c.title}>PEERVIEW</span>

            <span className={c.subLabel}>RESPONSIBILITY</span>
            <span className={c.subTitle}>UX/UI Design, User Testing</span>
          </div>
          <div className={c.projectIntro}>
            <span className={c.subLabel}>OVERVIEW</span>
            <span className={c.subTitle}>
              Peer review of teaching is a valuable method for gathering
              evidence about one's teaching practices. As a part of ongoing
              evaluation and enhancement of learning and teaching, it plays a
              vital role in recognizing excellence. This process serves as an
              important contributor to the continuous improvement of education,
              fostering a culture of excellence and innovation in the field of
              teaching and learning.
            </span>
          </div>
        </div>
        <div className={c.projectImg}>
          <img src={peerview} alt="peerview" />
        </div>

        <div className={c.projectContent}>
          <div className={c.section}>
            <div className={c.title}>THE PROBLEM</div>

            <div className={c.subSection}>
              <div className={c.description}>
                Peer review of teaching is one of a number of methods or
                techniques that can be used to gather evidence about one's
                teaching. It is recognised as an important contributor to the
                ongoing evaluation and enhancement of learning and teaching, as
                well as a process to recognise excellence.
              </div>
              <div>
                <div className={c.subTitle}>Paper-Based Inefficiencies</div>
                <div className={c.subDescription}>
                  The current paper-based process poses significant challenges
                  in terms of maintenance and retrieval. Transitioning to
                  digital solutions can significantly streamline and improve
                  efficiency, making data management more accessible and
                  sustainable.
                </div>
                <div className={c.subTitle}>Long turnaround time</div>
                <div className={c.subDescription}>
                  The review process entails multiple tasks, such as requesting
                  reviews, booking review sessions, gathering feedback, and
                  evaluation. However, without the aid of a digital platform,
                  these tasks often take longer than necessary. To address this
                  inefficiency, our focus lies in streamlining review processes
                  through the integration of a digital platform. This solution
                  aims to expedite each step, ultimately enhancing overall
                  efficiency and saving valuable time for academic staff and
                  their peers.
                </div>
              </div>
            </div>
          </div>
          <div className={c.section}>
            <div className={c.title}>MY ROLE</div>
            <div className={c.subSection}>
              <div className={c.description}>
                As the lead designer, I had the exciting opportunity to
                spearhead and orchestrate the design of the entire experience. I
                collaborated closely with cross-functional teams, ensuring a
                harmonious integration of design elements throughout the
                project.
              </div>
            </div>
          </div>
          <div className={c.section}>
            <div className={c.title}>USER RESEARCH</div>
            <div className={c.subSection}>
              <div>
                <div className={c.subTitle}>
                  User and stakeholder interviews
                </div>
                <div className={c.subDescription}>
                  As part of this project, I conducted numerous interviews with
                  end-users and stakeholders to gain insights into the current
                  review process, identify pain points, explore potential
                  opportunities, and understand their expectations for the app.
                </div>
                <div>
                  <div className={c.subTitle}>Competitor Research</div>
                  <div className={c.subDescription}>
                    Recognizing that users will not compare the new review app
                    to other universities' apps, but rather to the widely used
                    apps like Netflix and Facebook, we have ensured that this
                    exclusive university app stands on par with any modern
                    review app available to the public.
                  </div>
                </div>
                <div>
                  <div className={c.subTitle}>User Journey Mapping</div>
                  <div className={c.subDescription}>
                    Through interviews, I carefully mapped out the current user
                    journey, identifying gaps and pain points that exist between
                    each step of the process. This comprehensive analysis
                    allowed us to pinpoint areas for improvement and informed
                    our efforts to create a more seamless and user-friendly
                    experience.
                  </div>
                </div>
                <div>
                  <div className={c.subTitle}>Problem Statement</div>
                  <div className={c.subDescription}>
                    By leveraging insights from the user interviews, I
                    formulated a set of key problem statements that served as
                    guiding principles throughout the creation journey.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={c.section}>
            <div className={c.title}>PROTOTYPE</div>
            <div className={c.subSection}>
              <div>
                <div className={c.subTitle}>Project sitemap</div>
                <div className={c.subDescription}>
                  Developing a sitemap proved invaluable as it provided a
                  comprehensive understanding of the goals for each page
                </div>
                <div className={c.projectImg}>
                  <img src={sitemap} alt="sitemap" className={c.inline} />
                </div>
                <div className={c.subTitle}>User flow</div>
                <div className={c.subDescription}>
                  Building user flow helps the whole process of creating new
                  features
                </div>
                <div className={c.projectImg}>
                  <img src={userflow} alt="wireframe" className={c.inline} />
                </div>
                <div className={c.subTitle}>Wireframe</div>
                <div className={c.subDescription}>
                  There are two critical features that I illustrated with high
                  level wireframe.
                </div>
                <div className={c.projectImg}>
                  <img src={wireframe} alt="wireframe" className={c.inline} />
                </div>
              </div>
            </div>
          </div>
          <div className={c.section}>
            <div className={c.title}>UI DESIGN</div>
            <div className={c.subSection}>
              <div>
                <div className={c.subDescription}>
                  Create user interface components that consistently throughout
                  the application
                </div>
                <div className={c.projectImg}>
                  <img src={ui} alt="ui" className={c.inline} />
                </div>
              </div>
            </div>
          </div>
          <div className={c.section}>
            <div className={c.title}>Design System</div>
            <div className={c.subSection}>
              <div className={c.projectImg}>
                <img src={dls} alt="dls" className={c.inline} />
              </div>
              <div className={c.subDescription}>
                With the incorporation of a unique feature in this app, I
                proposed a design style that diverged from the conventional
                university projects. Delightfully, my design direction received
                approval for implementation, allowing us to create a visually
                compelling and distinct user experience.
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer
        left={{ to: '/monash-course-mapper', name: 'COURSE MAPPER' }}
        right={{
          to: '/monash-react-component-library',
          name: 'REACT COMPONENT LIBRARY',
        }}
      />
    </>
  )
}

export default transition(Peerview)
