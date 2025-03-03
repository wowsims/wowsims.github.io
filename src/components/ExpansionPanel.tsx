import { DOMAIN } from "../config";
import { Version } from "../types/version"

interface Props {
    version: Version
}

function ExpansionPanel({version}: Props) {
  const slug = version.acronym.toLowerCase();

  return (
    <div id={slug} className={`expansion-panel expansion-panel-${slug}`} style={{'--expansion-color': version.themeColorHex} as React.CSSProperties} key={slug}>
        <div className="expansion-cover" style={{'--expansion-bg': `url(${DOMAIN}${version.coverSrc})`} as React.CSSProperties} />
        <div className="expansion-panel-body container">
            <div className="expansion-block">
                <h1 className="text-brand h2 mb-0">WoWSims</h1>
                <h2 className="expansion-title">{version.title}</h2>
                <p className="expansion-description">{version.description}</p>
                <a className="expansion-btn btn btn-lg" href={`/${slug}/`}>Learn More</a>
            </div>
            <div className="expansion-logo-container">
              <img className="expansion-logo" src={version.logoSrc} alt={`${version.title} Logo`} />
            </div>
        </div>
    </div>
  )
}

export default ExpansionPanel
