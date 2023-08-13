import Footer from '../utils/Footer'
import c from './no-page.module.scss'

const NoPage = () => {
  return (
    <>
      <div className={c.pageContainer}>
        <div className={c.page}>
          <h2>Oops! The page you're searching for seems to be missing.</h2>
        </div>
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

export default NoPage
