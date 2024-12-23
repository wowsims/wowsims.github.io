import { Version } from '../types/version'

const versions: Version[] = [
    {
        slug: 'classic',
        title: 'Classic',
        description: 'Fight your way through the timeless tales of old Azeroth.',
        coverSrc: '/classic/assets/img/classic.jpg',
        logoSrc: 'https://warcraft.wiki.gg/images/thumb/a/af/WoW_Classic_logo.png/2560px-WoW_Classic_logo.png',
        themeColorHex: '#f8b700',
        available: true,
    },
    {
        slug: 'tbc',
        title: 'The Burning Crusade',
        description: 'Arm yourself against the onslaught of the Burning Legion.',
        coverSrc: '/tbc/assets/tbc.jpg',
        logoSrc: 'https://warcraft.wiki.gg/images/thumb/e/e2/WoW_BC_Classic_logo.png/1280px-WoW_BC_Classic_logo.png',
        themeColorHex: '#a3e268',
        available: true,
    },
    {
        slug: 'wotlk',
        title: 'Wrath of the Lich King',
        description: 'Find your light in the darkness of the frozen wastes of Northrend.',
        coverSrc: '/wotlk/assets/img/wotlk.png',
        logoSrc: 'https://warcraft.wiki.gg/images/thumb/c/c7/WoW_Wrath_Classic_logo.png/1280px-WoW_Wrath_Classic_logo.png',
        themeColorHex: '#7fcbd8',
        available: true,
    },
    {
        slug: 'sod',
        title: 'Season of Discovery',
        description: 'Hone your skills as you discover a world reimagined.',
        coverSrc: '/sod/assets/img/sod.png',
        logoSrc: 'https://warcraft.wiki.gg/images/thumb/3/36/Season_of_Discovery_WoW_Classic.png/1920px-Season_of_Discovery_WoW_Classic.png',
        themeColorHex: '#f8b700',
        available: true,
    },
    {
        slug: 'cata',
        title: 'Cataclysm',
        description: 'Master the challenges of a world on the brink of destruction.',
        coverSrc: '/cata/assets/img/cata.jpg',
        logoSrc: 'https://warcraft.wiki.gg/images/thumb/7/78/WoW_Cataclysm_Classic_logo.png/1920px-WoW_Cataclysm_Classic_logo.png',
        themeColorHex: '#f94119',
        available: true,
    },
    {
        slug: 'MoP',
        title: 'Mists of Pandaria',
        description: '',
        coverSrc: '/mop/assets/img/mop.jpg',
        logoSrc: 'tbd',
        themeColorHex: '#00FF98',
        available: false,
    },
]

export default versions
