import { Version } from '../types/version'

const versions: Version[] = [
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
        description: 'Simulations for World of Warcraft®: Mists of Pandaria Classic™.',
        coverSrc: '/cata/assets/img/cata.jpg',
        logoSrc: 'https://warcraft.wiki.gg/images/thumb/7/78/WoW_Cataclysm_Classic_logo.png/1920px-WoW_Cataclysm_Classic_logo.png',
        themeColorHex: '#f94119',
        available: true,
    },
    {
        title: 'Season of Discovery',
        acronym: 'SoD',
        description: 'Simulations for World of Warcraft® Classic: Season of Dicovery™.',
        coverSrc: '/sod/assets/img/sod.png',
        logoSrc: 'https://warcraft.wiki.gg/images/thumb/3/36/Season_of_Discovery_WoW_Classic.png/1920px-Season_of_Discovery_WoW_Classic.png',
        themeColorHex: '#f8b700',
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
        coverSrc: '/tbc/assets/tbc.jpg',
        logoSrc: 'https://warcraft.wiki.gg/images/thumb/e/e2/WoW_BC_Classic_logo.png/1280px-WoW_BC_Classic_logo.png',
        themeColorHex: '#a3e268',
        available: true,
    },
    {
        title: 'Classic',
        acronym: 'Classic',
        description: 'Simulations for World of Warcraft®: Classic™ (Era / Anniversary).',
        coverSrc: '/classic/assets/img/classic.jpg',
        logoSrc: 'https://warcraft.wiki.gg/images/thumb/a/af/WoW_Classic_logo.png/2560px-WoW_Classic_logo.png',
        themeColorHex: '#f8b700',
        available: true,
    },
]

export const getVersions = (): Version[] => {
    return versions.slice().filter(version => version.available)
}
