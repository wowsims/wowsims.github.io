import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { getVersions } from "../data/versions"
import { faDiscord, faGithub } from "@fortawesome/free-brands-svg-icons"
import PatreonButton from "./PatreonButton"
import { WoWIcon } from "./WoWIcon"

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
                            {version.title}
                        </a>
                    )
                })}
            </div>
            <div className="connect">
                <span className="footer-title">Connect</span>
                <a href="https://discord.gg/p3DgvmnDCS" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faDiscord} /> Discord
                </a>
                <a href="https://github.com/wowsims/" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faGithub} /> GitHub
                </a>
                <PatreonButton />
            </div>
        </footer>
    )
  }
  
  export default Footer
