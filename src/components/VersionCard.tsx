import { DOMAIN } from "../config";
import { resolveAssetUrl } from "../data/versions";
import { Version } from "../types/version"
import { WoWIcon } from "./WoWIcon";

interface Props {
    version: Version
    // Position in the grid, used to stagger the entrance animation
    index: number
}

function VersionCard({version, index}: Props) {
  const slug = version.acronym.toLowerCase();
  const isWip = version.status === 'wip';

  const content = (
    <>
      <div
        className="version-card-cover"
        style={version.coverSrc ? {'--version-bg': `url(${resolveAssetUrl(version.coverSrc)})`} as React.CSSProperties : undefined}
      />
      <div className="version-card-body">
        {isWip && (
          <span className="version-card-badge badge">
            <span className="version-card-badge-dot" aria-hidden="true" />
            Coming Soon
          </span>
        )}
        <div className="version-card-logo-container">
          {version.logoSrc ? (
            <img className="version-card-logo" src={resolveAssetUrl(version.logoSrc)} alt={`${version.title} Logo`} loading="lazy" />
          ) : (
            <span className="version-card-logo-fallback">
              <WoWIcon width="2.5rem" height="2.5rem" />
              {version.acronym}
            </span>
          )}
        </div>
        <div className="version-card-text">
          <h3 className="version-card-title">{version.title}</h3>
          <p className="version-card-description">{version.description}</p>
        </div>
      </div>
      <span className="version-card-sheen" aria-hidden="true" />
    </>
  )

  const className = [
    'version-card',
    `version-card-${slug}`,
    isWip && 'version-card-wip',
    version.featured && 'version-card-featured',
  ].filter(Boolean).join(' ');
  const style = {'--expansion-color': version.themeColorHex, '--i': index} as React.CSSProperties;

  if (isWip) {
    return (
      <div className={className} style={style} aria-disabled="true" title={`${version.title} is a work in progress`}>
        {content}
      </div>
    )
  }

  return (
    <a className={className} style={style} href={`${DOMAIN}/${slug}/`}>
      {content}
    </a>
  )
}

export default VersionCard
