import { faDiscord, faGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import PatreonButton from './PatreonButton'

import WoWSimsLogo from '../assets/img/WoW-Simulator-Icon.png';
import CurseforgeButton from './CurseforgeButton';

function Header() {
  const navLinks = (
    <>
      <a href="https://discord.gg/p3DgvmnDCS" target="_blank" rel="noopener noreferrer" className="nav-link flex-1" title="Join our Discord">
        <FontAwesomeIcon icon={faDiscord} size="2x" className="me-1" /><strong>Discord</strong>
      </a>
      <a href="https://github.com/wowsims/" target="_blank" rel="noopener noreferrer" className="nav-link flex-1" title="Contribute on GitHub">
        <FontAwesomeIcon icon={faGithub} size="2x" className="me-1" /><strong>GitHub</strong>
      </a>
      <CurseforgeButton className="flex-1" />
      <PatreonButton className="flex-1" />
    </>
  )
  return (
    <header className="homepage-header">
      <div className="container homepage-header-container">
        <nav className="navbar navbar-dark flex-wrap align-items-center align-items-md-end w-100">
          <div className="navbar-brand-container order-0">
            <a href="#" className="navbar-brand d-flex align-items-center p-0 m-0 gap-3">
              <img className="wowsims-logo" src={WoWSimsLogo} />
              <h1 className="wowsims-title">
                WoWSims
                <small className="expansion-title">Classic WoW Simulations</small>
              </h1>
            </a>
          </div>
          <div className="navbar-nav d-none d-md-flex flex-row align-items-center ms-auto">
            {navLinks}
          </div>

          <button className="navbar-toggler d-block d-md-none" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="offcanvas offcanvas-end" tabIndex={-1} id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
            <div className="offcanvas-header border-bottom">
              <a href="#" className="navbar-brand d-flex align-items-center p-0 m-0 gap-3">
                <img className="wowsims-logo" src={WoWSimsLogo} />
                <h1 className="wowsims-title">
                  WoWSims
                  <small className="expansion-title">Classic WoW Simulations</small>
                </h1>
              </a>
              <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
              <div className="navbar-nav d-flex flex-row ms-auto">
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
