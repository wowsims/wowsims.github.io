import { faDiscord, faGithub } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { ADDON_LINK, DISCORD_LINK, GITHUB_LINK } from "../config"
import AddonCurseforgeImg from '../assets/img/addon_curseforge.png';
import { ADDON_LINK_TEXT } from "./CurseforgeButton";

function Welcome() {
    return (
        <div id="welcomeContainer" className="container">
            <div className="flex-column justify-content-center">
                <p>
                    <strong className="text-brand">WoWSims</strong> is a fan-made open-source project started in 2021 with the goal of providing user-friendly tools that allow players to simulate their gameplay across the many versions of&nbsp;
                    <strong className="text-brand">World of Warcraft® Classic</strong>.
                    It's thanks to dozens of developers, hundreds of players, and thousands of hours of time that we've been able to keep the project going so that our users can continue to make the most out of their gameplay.
                </p>
                <p className="mb-0">
                    Want to contribute? Find us on&nbsp;
                    <a href={GITHUB_LINK} target="_blank" className="d-inline" title="Contribute on GitHub">
                        <FontAwesomeIcon icon={faGithub} /> <strong>GitHub</strong>
                    </a>
                    &nbsp;or join our&nbsp;
                    <a href={DISCORD_LINK} target="_blank" className="d-inline" title="Join our Discord">
                        <FontAwesomeIcon icon={faDiscord} /> <strong>Discord</strong>
                    </a>
                    .
                </p>
            </div>
            <div>
                <div id="addonInstallContainer">
                    <a href={ADDON_LINK} target="_blank" className="" title={ADDON_LINK_TEXT}>
                        <img src={AddonCurseforgeImg} alt="Addon Image" width="100%" />
                    </a>
                    <p className="mb-0">
                        Save time by importing your character from in-game with the&nbsp;
                        <a href={ADDON_LINK} target="_blank" className="" title={ADDON_LINK_TEXT}>
                            <strong>WoWSims Exporter addon</strong>
                        </a>
                        .
                    </p>
                </div>
            </div>
        </div>
    )
  }
  
  export default Welcome
  