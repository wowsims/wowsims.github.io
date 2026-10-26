import { faDiscord, faGithub, faPatreon } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Brand from './Brand'
import { ADDON_LINK_TEXT } from './CurseforgeButton'
import { WoWIcon } from './WoWIcon'
import { ADDON_LINK, COPYRIGHT_HOLDER, COPYRIGHT_START_YEAR, DISCLAIMER, DISCORD_LINK, GITHUB_LINK, PATREON_LINK, formatCopyright } from '../config'
import { communities } from '../data/communities'
import { getVersions, getVersionUrl } from '../data/versions'

// Groups with more links than this split their links into two columns
const SPLIT_GROUP_SIZE = 6

const externalLinkProps = { target: '_blank', rel: 'noopener noreferrer' }

function Footer() {
    return (
        <footer className="homepage-footer">
            <div className="page-container">
                <div className="homepage-footer-columns">
                    <div className="homepage-footer-brand">
                        <Brand />
                        <div className="homepage-footer-socials">
                            <a href={DISCORD_LINK} {...externalLinkProps} title="Join our Discord" aria-label="Discord">
                                <FontAwesomeIcon icon={faDiscord} size="lg" />
                            </a>
                            <a href={GITHUB_LINK} {...externalLinkProps} title="Contribute on GitHub" aria-label="GitHub">
                                <FontAwesomeIcon icon={faGithub} size="lg" />
                            </a>
                            <a href={ADDON_LINK} {...externalLinkProps} title={ADDON_LINK_TEXT} aria-label={ADDON_LINK_TEXT}>
                                <WoWIcon width="1.25em" height="1.25em" />
                            </a>
                            <a href={PATREON_LINK} {...externalLinkProps} title="Become a Patron!" aria-label="Patreon">
                                <FontAwesomeIcon icon={faPatreon} size="lg" />
                            </a>
                        </div>
                    </div>
                    <nav className="homepage-footer-group" aria-labelledby="homepage-footer-sims">
                        <h2 id="homepage-footer-sims" className="homepage-footer-heading">Sims</h2>
                        <ul className="homepage-footer-links">
                            {getVersions().map(version => (
                                <li key={version.acronym}>
                                    {version.status === 'wip' ? (
                                        <span className="homepage-footer-wip">{version.title}</span>
                                    ) : (
                                        <a href={getVersionUrl(version)}>{version.title}</a>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </nav>
                    {communities.map((group, index) => (
                        <nav
                            key={group.title}
                            className={['homepage-footer-group', group.links.length > SPLIT_GROUP_SIZE && 'homepage-footer-group-wide'].filter(Boolean).join(' ')}
                            aria-labelledby={`homepage-footer-community-${index}`}>
                            <h2 id={`homepage-footer-community-${index}`} className="homepage-footer-heading">{group.title}</h2>
                            <ul className="homepage-footer-links">
                                {group.links.map(link => (
                                    <li key={link.url}>
                                        <a href={link.url} {...externalLinkProps}>{link.name}</a>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    ))}
                </div>
                <div className="homepage-footer-legal">
                    <span>{formatCopyright(COPYRIGHT_START_YEAR, COPYRIGHT_HOLDER)}</span>
                    <span className="homepage-footer-sep" aria-hidden="true">·</span>
                    <span>{DISCLAIMER}</span>
                </div>
            </div>
        </footer>
    )
}

export default Footer
