import { faDiscord, faGithub } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

function Welcome() {
    return (
        <div id="welcomeContainer" className="container">
            <div className="flex-column justify-content-center">
            <p>
                <strong className="text-brand">WoWSims</strong> is a fan-created open-source project started in 2021 with the goal of providing user-friendly tools that allow players to simulate their gameplay across the many versions of&nbsp;
                <strong className="text-brand">World of Warcraft® Classic</strong>.
                It's thanks to dozens of developers, hundreds of players, and thousands of hours of time that we've been able to keep the project going so that our users can continue to make the most out of their gameplay.
            </p>
            <p className="mb-0">
                Want to contribute? Find us on&nbsp;
                <a href="https://github.com/wowsims/" target="_blank" className="d-inline" title="Contribute on GitHub">
                    <FontAwesomeIcon icon={faGithub} /> GitHub
                </a>
                &nbsp;or join our&nbsp;
                <a href="https://discord.gg/p3DgvmnDCS" target="_blank" className="d-inline" title="Join our Discord">
                    <FontAwesomeIcon icon={faDiscord} /> Discord
                </a>
                .
            </p>
            </div>
            <div>
                <iframe className="discord-iframe" src="https://discord.com/widget?id=891730968493305867&theme=dark" width="350" height="400" allowTransparency={true} sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts" />
            </div>
        </div>
    )
  }
  
  export default Welcome
  