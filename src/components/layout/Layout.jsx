import { Outlet, Link } from 'react-router-dom'
import c from './layout.module.scss'
const Layout = () => {
  return (
    <div className={c.pageLayout}>
      <nav>
        <ul className={c.navbar}>
          <li>
            <Link className={c.home} to="/">
              P
            </Link>
          </li>
          <li>
            <Link to="/ping-me">Ping Me</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </div>
  )
}

export default Layout
