import { Version } from "../types/version"

interface Props {
    version: Version
}

function ExpansionPanel({version}: Props) {
  return (
    <div className={`expansion-panel expansion-panel-${version.slug}`} style={{'--expansion-color': version.themeColorHex} as React.CSSProperties}>
        <div className="expansion-cover" style={{'--expansion-bg': `url(${version.coverSrc})`} as React.CSSProperties} />
        <div className="expansion-panel-body container">
            <div className="expansion-block">
                <h1 className="text-brand h2 mb-0">WoWSims</h1>
                <h2 className="expansion-title">{version.title}</h2>
                <p className="expansion-description">{version.description}</p>
                <a className="expansion-btn btn btn-lg" href={`/${version.slug}`}>Learn More</a>
            </div>
            <div className="expansion-logo-container">
              <img className="expansion-logo" src={version.logoSrc} alt={`${version.title} Logo`} />
            </div>
        </div>
    </div>
  )
}

export default ExpansionPanel
