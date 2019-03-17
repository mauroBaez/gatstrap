import React from 'react'
import { Link } from 'gatsby'

class Navi extends React.Component {
  render() {
    const { location, title } = this.props
    return (
      <nav className="navbar navbar-expand navbar-dark flex-column flex-md-row bg-primary">
          <Link className="text-center" to="/">
            <h1 className="navbar-brand mb-0">{title}</h1>
          </Link>
          <div className="navbar-nav-scroll">
            <ul className="navbar-nav bd-navbar-nav flex-row">
              <li
                className={
                  location.pathname === '/' ? 'nav-item active' : 'nav-item'
                }
              >
                <Link to="/" className="nav-link">
                  Inicio
                </Link>
              </li>
              <li
                className={
                  location.pathname === '/mudanzas/'
                    ? 'nav-item active'
                    : 'nav-item'
                }
              >
                <Link to="/mudanzas/" className="nav-link">
                  Mudanzas
                </Link>
              </li>
              <li
                className={
                  location.pathname === '/guardamuebles/'
                    ? 'nav-item active'
                    : 'nav-item'
                }
              >
                <Link to="/guardamuebles/" className="nav-link">
                  Guardamuebles
                </Link>
              </li>
              <li
                className={
                  location.pathname === '/embalaje/'
                    ? 'nav-item active'
                    : 'nav-item'
                }
              >
                <Link to="/embalaje/" className="nav-link">
                  Servicio de embalaje
                </Link>
              </li>
            </ul>
          </div>
          <div className="navbar-nav flex-row ml-md-auto d-none d-md-flex" />
      </nav>
    )
  }
}

export default Navi
