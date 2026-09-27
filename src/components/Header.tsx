import { faDiscord, faGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import PatreonButton from './PatreonButton'

import WoWSimsLogo from '../assets/img/WoW-Simulator-Icon.png';
import CurseforgeButton from './CurseforgeButton';
import { DISCORD_LINK, GITHUB_LINK } from '../config';

function Header() {
  const navLinks = (
    <>
      <a href={DISCORD_LINK} target="_blank" rel="noopener noreferrer" className="nav-link" title="Join our Discord">
        <FontAwesomeIcon icon={faDiscord} size="lg" className="me-2" /><strong>Discord</strong>
      </a>
      <a href={GITHUB_LINK} target="_blank" rel="noopener noreferrer" className="nav-link" title="Contribute on GitHub">
        <FontAwesomeIcon icon={faGithub} size="lg" className="me-2" /><strong>GitHub</strong>
      </a>
      <CurseforgeButton />
      <PatreonButton />
    </>
  )

  const brand = (
    <a href="#" className="navbar-brand d-flex align-items-center p-0 m-0 gap-2">
      <img className="wowsims-logo" src={WoWSimsLogo} alt="WoWSims Logo" />
      <span className="wowsims-title">
        WoWSims
        <small className="wowsims-subtitle">World of Warcraft Simulations</small>
      </span>
    </a>
  )

  return (
    <header className="homepage-header">
      <div className="page-container">
        <nav className="navbar navbar-dark flex-nowrap align-items-center w-100">
          {brand}
          <div className="navbar-nav d-none d-lg-flex flex-row align-items-center ms-auto">
            {navLinks}
          </div>

          <button className="navbar-toggler d-block d-lg-none" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Open navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="offcanvas offcanvas-end" tabIndex={-1} id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
            <div className="offcanvas-header border-bottom">
              {brand}
              <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
              <div className="navbar-nav d-flex flex-column align-items-start">
                {navLinks}
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Header
