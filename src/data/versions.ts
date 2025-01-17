import { Version } from '../types/version'

const versions: Version[] = [
    {
        title: 'Mists of Pandaria',
        acronym: 'MoP',
        description: '',
        coverSrc: '/mop/assets/img/mop.jpg',
        logoSrc: 'tbd',
        themeColorHex: '#00FF98',
        available: false,
    },
    {
        title: 'Cataclysm',
        acronym: 'Cata',
        description: 'Master the challenges of a world on the brink of destruction.',
        coverSrc: '/cata/assets/img/cata.jpg',
        logoSrc: 'https://warcraft.wiki.gg/images/thumb/7/78/WoW_Cataclysm_Classic_logo.png/1920px-WoW_Cataclysm_Classic_logo.png',
        themeColorHex: '#f94119',
        available: true,
    },
    {
        title: 'Season of Discovery',
        acronym: 'SoD',
        description: 'Hone your skills as you discover a world reimagined.',
        coverSrc: '/sod/assets/img/sod.png',
        logoSrc: 'https://warcraft.wiki.gg/images/thumb/3/36/Season_of_Discovery_WoW_Classic.png/1920px-Season_of_Discovery_WoW_Classic.png',
        themeColorHex: '#f8b700',
        available: true,
    },
    {
        title: 'Wrath of the Lich King',
        acronym: 'WoTLK',
        description: 'Find your light in the darkness of the frozen wastes of Northrend.',
        coverSrc: '/wotlk/assets/img/wotlk.png',
        logoSrc: 'https://warcraft.wiki.gg/images/thumb/c/c7/WoW_Wrath_Classic_logo.png/1280px-WoW_Wrath_Classic_logo.png',
        themeColorHex: '#7fcbd8',
        available: true,
    },
    {
        title: 'The Burning Crusade',
        acronym: 'TBC',
        description: 'Arm yourself against the onslaught of the Burning Legion.',
        coverSrc: '/tbc/assets/tbc.jpg',
        logoSrc: 'https://warcraft.wiki.gg/images/thumb/e/e2/WoW_BC_Classic_logo.png/1280px-WoW_BC_Classic_logo.png',
        themeColorHex: '#a3e268',
        available: true,
    },
    {
        title: 'Classic',
        acronym: 'Classic',
        description: 'Fight your way through the timeless tales of old Azeroth.',
        coverSrc: '/classic/assets/img/classic.jpg',
        logoSrc: 'https://warcraft.wiki.gg/images/thumb/a/af/WoW_Classic_logo.png/2560px-WoW_Classic_logo.png',
        themeColorHex: '#f8b700',
        available: true,
    },
]

export const getVersions = (): Version[] => {
    return versions.slice().filter(version => version.available)
}
