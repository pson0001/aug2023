import { motion } from 'framer-motion'
import transition from '../../layout/transition'
const StudentApps = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] }}
      >
        Monash Student Apps
      </motion.div>
    </>
  )
}

export default transition(StudentApps)
