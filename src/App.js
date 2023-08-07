import './App.css'
import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Layout from './components/layout/Layout'
import Home from './components/home/Home'
import NoPage from './components/noPage/NoPage'
import StudentPortal from './components/projects/StudentPortal'
import { AnimatePresence } from 'framer-motion'
import CourseMapper from './components/projects/CourseMapper'
import Peerview from './components/projects/Peerview'
import Library from './components/projects/Library'
function App() {
  const location = useLocation()

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/monash-student-portal" element={<StudentPortal />} />
          <Route path="/monash-course-mapper" element={<CourseMapper />} />
          <Route path="/monash-peerview" element={<Peerview />} />
          <Route path="/monash-react-component-library" element={<Library />} />

          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </AnimatePresence>
  )
}

export default App
