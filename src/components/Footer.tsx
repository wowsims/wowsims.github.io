import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import versions from "../data/versions"
import { faDiscord, faGithub } from "@fortawesome/free-brands-svg-icons"
import PatreonButton from "./PatreonButton"

function Footer() {
    return (
        <footer id="footerContainer" className="container">
            <div className="copyright">
                <span>© 2021-2025 WoWSims team</span>
            </div>
            <div className="versions">
                <span className="footer-title">Versions</span>
                {versions.filter(version => version.available).map(version => (
                    <a className="" href={`/${version.slug}`}>{version.title}</a>
                ))}
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
