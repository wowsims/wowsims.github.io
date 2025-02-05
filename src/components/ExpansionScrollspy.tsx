import React from "react";
import { getVersions } from "../data/versions";
import { WoWIcon } from "./WoWIcon";

export function ExpansionScrollspy() {
    const fixedScroll = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        event.preventDefault()

        const panel = document.querySelector(event.currentTarget.getAttribute('href')!)!
        panel.scrollIntoView({ behavior: 'smooth' });
    }

    return (
        <nav id="expansion-scrollspy">
            <div className="expansion-scrollspy-container">
                {getVersions().map(version => {
                    const slug = version.acronym.toLowerCase();
                    return (
                        <a href={`#${slug}`} className="expansion-scrollspy-link" style={{color: version.themeColorHex} as React.CSSProperties} key={slug} onClick={(e) => fixedScroll(e)}>
                            <WoWIcon className="expansion-scrollspy-link-icon" />
                            <span>{version.acronym}</span>
                        </a>
                    )
                })}
            </div>
        </nav>
    )
}
