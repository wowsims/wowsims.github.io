import { faDiscord, faGithub } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { ADDON_LINK, DISCORD_LINK, GITHUB_LINK } from "../config"
import { getVersions } from "../data/versions";
import { ADDON_LINK_TEXT } from "./CurseforgeButton";
import { WoWIcon } from "./WoWIcon";

function Welcome() {
    const foreverColor = getVersions().find(version => version.acronym === 'Forever')?.themeColorHex;

    return (
        <section className="hero">
            <h1 className="hero-title">
                Simulate every era of <span className="text-brand">World of Warcraft</span>
            </h1>
            <p className="hero-blurb">
                <strong className="text-brand">WoWSims</strong> is a fan-made open-source project started in 2021 with the goal of providing user-friendly tools that allow players to simulate their gameplay in <strong>World of Warcraft® Classic</strong>.
                Since then we've grown to support every Classic release, and now we're carrying that support forward into <strong style={{color: foreverColor}}>World of Warcraft®: Forever</strong>.
                It's thanks to dozens of developers, hundreds of players, and thousands of hours of time that we've been able to keep the project going so that our users can continue to make the most out of their gameplay.
            </p>
            <div className="hero-actions">
                <a href={DISCORD_LINK} target="_blank" rel="noopener noreferrer" className="hero-btn hero-btn-discord" title="Join our Discord">
                    <FontAwesomeIcon icon={faDiscord} /> Join our Discord
                </a>
                <a href={GITHUB_LINK} target="_blank" rel="noopener noreferrer" className="hero-btn" title="Contribute on GitHub">
                    <FontAwesomeIcon icon={faGithub} /> Contribute on GitHub
                </a>
                <a href={ADDON_LINK} target="_blank" rel="noopener noreferrer" className="hero-btn hero-btn-addon" title={ADDON_LINK_TEXT}>
                    <WoWIcon width="1em" height="1em" /> Get the Exporter addon
                </a>
            </div>
        </section>
    )
}

export default Welcome
