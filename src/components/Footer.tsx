import Brand from './Brand'
import { ADDON_LINK_TEXT } from './CurseforgeButton'
import { ADDON_LINK, COPYRIGHT_HOLDER, COPYRIGHT_START_YEAR, DISCLAIMER, DISCORD_LINK, GITHUB_LINK, PATREON_LINK, formatCopyright } from '../config'
import { communities } from '../data/communities'
import { getVersions, getVersionUrl } from '../data/versions'

const externalLinkProps = { target: '_blank', rel: 'noopener noreferrer' }

const SOCIAL_LINKS = [
    { href: DISCORD_LINK, label: 'Discord', title: 'Join our Discord' },
    { href: GITHUB_LINK, label: 'GitHub', title: 'Contribute on GitHub' },
    { href: ADDON_LINK, label: 'Addon', title: ADDON_LINK_TEXT },
    { href: PATREON_LINK, label: 'Patreon', title: 'Become a Patron!' },
]

// Styled by public/footer.css, which every WoWSims site links
function Footer() {
    return (
        <footer className="wowsims-footer">
            <div className="page-container">
                <div className="wowsims-footer-columns">
                    <div className="wowsims-footer-brand">
                        <Brand />
                        <ul className="wowsims-footer-socials">
                            {SOCIAL_LINKS.map(({ href, label, title }, index) => (
                                <li key={href}>
                                    {index > 0 && <span className="wowsims-footer-dot" aria-hidden="true">·</span>}
                                    <a href={href} {...externalLinkProps} title={title}>{label}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <nav className="wowsims-footer-group" aria-labelledby="homepage-footer-sims">
                        <h2 id="homepage-footer-sims" className="wowsims-footer-heading">Sims</h2>
                        <ul className="wowsims-footer-links">
                            {getVersions().map(version => (
                                <li key={version.acronym}>
                                    {version.status === 'wip' ? (
                                        <span className="wowsims-footer-wip">{version.title}</span>
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
                            className={group.columns === 2 ? 'wowsims-footer-group wowsims-footer-group-split' : 'wowsims-footer-group'}
                            aria-labelledby={`homepage-footer-community-${index}`}>
                            <h2 id={`homepage-footer-community-${index}`} className="wowsims-footer-heading">{group.title}</h2>
                            <ul className="wowsims-footer-links">
                                {group.links.map(link => (
                                    <li key={link.url}>
                                        <a href={link.url} {...externalLinkProps}>{link.name}</a>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    ))}
                </div>
                <div className="wowsims-footer-legal">
                    <span>{formatCopyright(COPYRIGHT_START_YEAR, COPYRIGHT_HOLDER)}</span>
                    <span className="wowsims-footer-dot" aria-hidden="true">·</span>
                    <span>{DISCLAIMER}</span>
                </div>
            </div>
        </footer>
    )
}

export default Footer
