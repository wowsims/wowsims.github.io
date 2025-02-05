import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { getVersions } from "../data/versions"
import { faDiscord, faGithub } from "@fortawesome/free-brands-svg-icons"
import PatreonButton from "./PatreonButton"
import { WoWIcon } from "./WoWIcon"
import { DISCORD_LINK, GITHUB_LINK } from "../config"
import CurseforgeButton from "./CurseforgeButton"

function Footer() {
    return (
        <footer id="footerContainer" className="container">
            <div className="copyright">
                <span>© 2021-2025 WoWSims team</span>
            </div>
            <div className="versions">
                <span className="footer-title">Versions</span>
                {getVersions().filter(version => version.available).map(version => {
                    const slug = version.acronym.toLowerCase();
                    return (
                        <a className="d-flex align-items-center" href={`/${slug}`} style={{'color': version.themeColorHex} as React.CSSProperties} key={slug}>
                            <WoWIcon className="me-2" />
                            <strong>{version.title}</strong>
                        </a>
                    )
                })}
            </div>
            <div className="connect">
                <span className="footer-title">Connect</span>
                <a href={DISCORD_LINK} target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faDiscord} className="me-1" /><strong>Discord</strong>
                </a>
                <a href={GITHUB_LINK} target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faGithub} className="me-1" /><strong>GitHub</strong>
                </a>
                <CurseforgeButton />
                <PatreonButton />
            </div>
        </footer>
    )
  }
  
  export default Footer
