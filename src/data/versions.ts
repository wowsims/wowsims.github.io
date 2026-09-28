import { DOMAIN } from '../config'
import { Version } from '../types/version'

const versions: Version[] = [
    {
        title: 'Forever',
        acronym: 'Forever',
        description: 'Simulations for World of Warcraft®: Forever.',
        coverSrc: '/img/forever_cover.webp',
        logoSrc: '/img/forever_logo.webp',
        themeColorHex: '#4fc3f7',
        available: true,
        status: 'wip',
        featured: true,
    },
    {
        title: 'Mists of Pandaria',
        acronym: 'MoP',
        description: 'Simulations for World of Warcraft®: Mists of Pandaria Classic™.',
        coverSrc: '/mop/assets/img/mop.jpg',
        logoSrc: 'https://blz-contentstack-images.akamaized.net/v3/assets/blt3452e3b114fab0cd/bltffc20bbc4caf8c3b/679d43c9bf086a4164b3ec5a/kazoo-logo.png',
        themeColorHex: '#00FF98',
        available: true,
    },
    {
        title: 'Cataclysm',
        acronym: 'Cata',
        description: 'Simulations for World of Warcraft®: Cataclysm Classic™.',
        coverSrc: '/cata/assets/img/cata.jpg',
        logoSrc: 'https://warcraft.wiki.gg/images/thumb/7/78/WoW_Cataclysm_Classic_logo.png/1920px-WoW_Cataclysm_Classic_logo.png',
        themeColorHex: '#f94119',
        available: true,
    },
    {
        title: 'Wrath of the Lich King',
        acronym: 'WoTLK',
        description: 'Simulations for World of Warcraft®: Wrath of the Lich King Classic™.',
        coverSrc: '/wotlk/assets/img/wotlk.png',
        logoSrc: 'https://warcraft.wiki.gg/images/thumb/c/c7/WoW_Wrath_Classic_logo.png/1280px-WoW_Wrath_Classic_logo.png',
        themeColorHex: '#7fcbd8',
        available: true,
    },
    {
        title: 'The Burning Crusade',
        acronym: 'TBC',
        description: 'Simulations for World of Warcraft®: Burning Crusade Classic™.',
        coverSrc: '/tbc/assets/img/tbc.jpg',
        logoSrc: 'https://warcraft.wiki.gg/images/thumb/e/e2/WoW_BC_Classic_logo.png/1280px-WoW_BC_Classic_logo.png',
        themeColorHex: '#a3e268',
        available: true,
    },
    {
        title: 'Classic/Vanilla',
        acronym: 'Classic',
        description: 'Simulations for World of Warcraft®: Classic™.',
        coverSrc: '/classic/assets/img/classic.jpg',
        logoSrc: 'https://warcraft.wiki.gg/images/thumb/a/af/WoW_Classic_logo.png/2560px-WoW_Classic_logo.png',
        themeColorHex: '#f8b700',
        available: true,
    },
    {
        title: 'Season of Discovery',
        acronym: 'SoD',
        description: 'Simulations for World of Warcraft® Classic: Season of Discovery™.',
        coverSrc: '/sod/assets/img/sod.png',
        logoSrc: 'https://warcraft.wiki.gg/images/thumb/3/36/Season_of_Discovery_WoW_Classic.png/1920px-Season_of_Discovery_WoW_Classic.png',
        themeColorHex: '#f8b700',
        available: true,
    },
]

export const getVersions = (): Version[] => {
    return versions.slice().filter(version => version.available)
}

// Files in this site's own `public/img/` folder, served from whatever origin is rendering the page
const LOCAL_ASSET_PREFIX = '/img/'

const isRootRelative = (src: string): boolean => src.startsWith('/') && !src.startsWith('//')

// Paths starting with a single `/` are hosted by the individual sim repos under DOMAIN, except for
// this site's own `public/img/` files. Absolute URLs are used as-is.
export const resolveAssetUrl = (src: string): string => {
    if (isRootRelative(src) && !src.startsWith(LOCAL_ASSET_PREFIX)) {
        return `${DOMAIN}${src}`
    }
    return src
}

// Like `resolveAssetUrl`, but always absolute, for URLs that are read from other sites
const toAbsoluteUrl = (src: string): string => (isRootRelative(src) ? `${DOMAIN}${src}` : src)

export const getVersionSlug = (version: Version): string => version.acronym.toLowerCase()

export const getVersionUrl = (version: Version): string => `${DOMAIN}/${getVersionSlug(version)}/`

// Shape of the public `/versions.json` manifest (emitted by the `versionsManifest` plugin in `vite.config.ts`)
// that the individual sim sites fetch at runtime to link to each other. All URLs are absolute. Adding a field
// is safe; renaming, removing or changing the meaning of one is breaking, so bump `schemaVersion` for that.
// Consumers ignore manifests with a schema version they do not know.
export type VersionsManifest = {
    schemaVersion: 1,
    homepage: string,
    versions: {
        slug: string,
        title: string,
        acronym: string,
        url: string,
        themeColor: string,
        coverUrl?: string,
        logoUrl?: string,
        status: 'live' | 'wip',
    }[],
}

export const buildVersionsManifest = (): VersionsManifest => ({
    schemaVersion: 1,
    homepage: DOMAIN,
    versions: getVersions().map(version => ({
        slug: getVersionSlug(version),
        title: version.title,
        acronym: version.acronym,
        url: getVersionUrl(version),
        themeColor: version.themeColorHex,
        coverUrl: version.coverSrc && toAbsoluteUrl(version.coverSrc),
        logoUrl: version.logoSrc && toAbsoluteUrl(version.logoSrc),
        status: version.status ?? 'live',
    })),
})
