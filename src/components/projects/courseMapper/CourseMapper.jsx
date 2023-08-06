import React from 'react'
import c from './course-mapper.module.scss'
import mapper from '../../assets/course-mapper-browser.png'
import coreBefore from '../../assets/core-concepts-before.png'
import coreAfter from '../../assets/core-concepts-after.png'
import mapBefore from '../../assets/map-before.png'
import mapAfter from '../../assets/map-after.png'

import transition from '../../layout/transition'
import { Link } from 'react-router-dom'

const CourseMapper = () => {
  return (
    <>
      <div className={c.projectContainer}>
        <div className={c.project}>
          <div className={c.projectTitle}>
            <span className={c.subLabel}>PROJECT NAME</span>
            <span className={c.title}>COURSE MAPPER</span>

            <span className={c.subLabel}>RESPONSIBILITY</span>
            <span className={c.subTitle}>
              User research, UX/UI Design, Frontend Development, User Testing
            </span>
          </div>
          <div className={c.projectIntro}>
            <span className={c.subLabel}>OVERVIEW</span>
            <span className={c.subTitle}>
              In 2020, we faced numerous challenges, including restrictions on
              international travel. During these times, students require
              additional support in choosing their courses and navigating their
              academic journey. Course Mapper aims to alleviate the burden on
              the Student Service Desk by providing guidance to students during
              these uncertain times, helping them select their units and
              complete their degrees with ease.
            </span>
          </div>
        </div>
        <div className={c.projectImg}>
          <img src={mapper} alt="mapper" />
        </div>

        <div className={c.projectContent}>
          <div className={c.numberContainer}>
            <span>Since July 2021, Course Mapper has successfully</span>
            <div className={c.projectHighlight}>
              <div>
                <span className={c.subLabel}>GENERATED</span>
                <span className={c.number}>54,000+</span>
                <span>Personalized course plans</span>
              </div>
              <div>
                <span className={c.subLabel}>HELPED</span>
                <span className={c.number}>25,000+</span>
                <span>Students</span>
              </div>
              <div>
                <span className={c.subLabel}>USED BY</span>
                <span className={c.number}>200</span>
                <span>Course advisers</span>
              </div>
              <div>
                <span className={c.subLabel}>REDUCE HANDLING TIMES</span>
                <span className={c.number}>{'20+ -> 5'}</span>
                <span>minutes</span>
              </div>
            </div>
          </div>
          <div className={c.section}>
            <div className={c.title}>THE PROBLEM</div>

            <div className={c.subSection}>
              <div className={c.description}>
                Our goal for the project was to transform a paper-based, manual
                and time-consuming course mapping progress to a smooth, seamless
                and easy online experience.
              </div>
              <div>
                <div className={c.subTitle}>For staff - Course advisers</div>
                <div className={c.subTitleSmall}>Information fragmentation</div>
                <div className={c.subDescription}>
                  Course advisers often need to refer to a multitude of
                  information sources during the course mapping process. As a
                  result, a multitude of tabs—comprising web pages and local
                  files—inevitably clutter the workspace.
                </div>
                <div className={c.subTitleSmall}>Lack of standardization</div>
                <div className={c.subDescription}>
                  Course advisers are working with data from different sources
                  and formats.
                </div>
              </div>
              <div>
                <div className={c.subTitle}>For student</div>
                <div className={c.subTitleSmall}>Inconsistent output</div>
                <div className={c.subDescription}>
                  As students receive course advice from multiple advisers
                  during their study, the manual process makes it challenging to
                  refer back to previous suggested course plans easily.
                </div>
              </div>
            </div>
          </div>
          <div className={c.section}>
            <div className={c.title}>My ROLE</div>
            <div className={c.subSection}>
              <div className={c.description}>
                I had the privilege of leading the design of the course advice
                experience. This involved close collaboration with fellow
                designers, as well as actively contributing to the front-end
                development. Together, we crafted an innovative and user-centric
                course advice system that enhances the academic journey for
                students.
              </div>
            </div>
          </div>
          <div className={c.section}>
            <div className={c.title}>USER RESEARCH</div>
            <div className={c.subSection}>
              <div>
                <div className={c.subTitle}>
                  User Interviews and User Journey Mapping
                </div>
                <div className={c.subDescription}>
                  Our team of designers conducted extensive interviews with
                  end-users, encompassing both staff and students. These
                  interviews aimed to uncover the existing process, pain points,
                  opportunities, and user expectations for the app. Using this
                  valuable insight, we mapped out the current process,
                  translating it into detailed steps and actions.
                </div>
                <div>
                  <div className={c.subTitle}>Enquiries Analysis</div>
                  <div className={c.subDescription}>
                    I conducted comprehensive research analysis on various
                    categories of student enquiries and synthesized the
                    resulting requirements and expectations.
                  </div>
                  {/* <div className={c.projectImg}>
                  <img src={steps} alt="mapper" />
                </div> */}
                </div>
              </div>
            </div>
          </div>
          <div className={c.section}>
            <div className={c.title}>IDEAS AND ITERATION</div>
            <div className={c.subSection}>
              <div>
                <div className={c.subTitle}>Brainstorming</div>
                <div className={c.subDescription}>
                  Using the insights from my research and analysis, I
                  facilitated multiple high-level brainstorming sessions to
                  uncover the root flow of the problem.
                </div>
                <div className={c.projectImg}>
                  <div className={c.subTitleSmall}>Before</div>
                  <img src={coreBefore} alt="mapper" className={c.inline} />
                  <div className={c.subTitleSmall}>After</div>

                  <img src={coreAfter} alt="mapper" className={c.inline} />
                </div>
                <div className={c.subDescription}>
                  Additionally, we addressed other pain points through multiple
                  brainstorming sessions, collectively striving to identify the
                  most effective and optimal solutions.
                </div>
                <div className={c.subDescription}>
                  In this example, one of the pain points lies in the existence
                  of hundreds of PDF course progression maps maintained by
                  faculties, each with different formats. As a proof of concept,
                  I manually mapped three courses to showcase the potential
                  value of our solution.
                </div>
                <div className={c.projectImg}>
                  <div className={c.subTitleSmall}>Before</div>
                  <img src={mapBefore} alt="mapper" className={c.inline} />
                  <div className={c.subTitleSmall}>After</div>

                  <img src={mapAfter} alt="mapper" className={c.inline} />
                </div>
                <div className={c.subDescription}>
                  This approach emerged as the most cherished and widely
                  embraced feature among course advisors. Currently, with
                  dedicated resources and assistance, we have successfully
                  digitized thousands of historical PDF course maps.
                </div>
                <div className={c.subDescription}>
                  Now, we aim to initiate a new project to build digital course
                  maps from scratch, further improving user experience and
                  accessibility.
                </div>
              </div>
            </div>
          </div>
          <div className={c.section}>
            <div className={c.title}>BRING IT ALL TOGETHER</div>
            <div className={c.videoContainer}>
              <iframe
                className={c.iframe}
                title="course mapper"
                src="https://drive.google.com/file/d/1aVB5vu2ieN7mtR_kJ8SRz_UQRakUzDuI/preview"
              ></iframe>
            </div>
          </div>
        </div>
        {/* <div className={[c.navigateButton, c.right].join(' ')}>
          <Link to="/" className={c.buttonItem}>
            <span className={c.arrowText}>Next</span>
            <span className={c.arrowLine}></span>
            <span className={c.arrow}></span>
          </Link>
        </div> */}
      </div>
    </>
  )
}
export default transition(CourseMapper)
