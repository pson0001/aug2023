import './App.css'
import { Routes, Route, useLocation } from 'react-router-dom'
import Layout from './components/layout/Layout'
import Home from './components/home/Home'
import About from './components/about/About'
import NoPage from './components/noPage/NoPage'
import StudentApps from './components/projects/studentApps/StudentApps'
import { AnimatePresence } from 'framer-motion'
import CourseMapper from './components/projects/courseMapper/CourseMapper'
function App() {
  const location = useLocation()

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/monash-student-apps" element={<StudentApps />} />
          <Route path="/monash-course-mapper" element={<CourseMapper />} />

          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </AnimatePresence>
  )
}

export default App
