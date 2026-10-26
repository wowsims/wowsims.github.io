// Partner Discords linked from the footer of every WoWSims site (the sim sites read them from `/versions.json`)
export type CommunityGroup = {
    title: string,
    links: { name: string, url: string }[],
    // How many columns the group's links take (`.wowsims-footer-group-split` in public/footer.css). Defaults to 1.
    columns?: 1 | 2,
}

export const communities: CommunityGroup[] = [
    {
        title: 'Forever Community Servers',
        links: [
            { name: 'WoW Forever NA', url: 'https://discord.gg/wowforeverna' },
            { name: 'WoW Forever EU PVE', url: 'https://discord.gg/JAQMAGUyft' },
            { name: 'WoW Forever EU PVP', url: 'https://discord.gg/foreverclassic' },
        ],
    },
    {
        title: 'Class Discords',
        columns: 2,
        links: [
            { name: 'Death Knight', url: 'https://discord.gg/yGbC7dRxEs' },
            { name: 'Druid', url: 'https://discord.gg/SMwmrBV' },
            { name: 'Hunter', url: 'https://discord.gg/nzeYUcVH8v' },
            { name: 'Mage', url: 'https://discord.gg/tEdQhsH' },
            { name: 'Monk', url: 'https://discord.gg/FdkpqgPwHZ' },
            { name: 'Paladin', url: 'https://discord.gg/lightclubclassic' },
            { name: 'Priest', url: 'https://discord.gg/priestclassic' },
            { name: 'Rogue', url: 'https://discord.gg/ADaqUftwyj' },
            { name: 'Shaman', url: 'https://discord.gg/NvbYJNpJEE' },
            { name: 'Warlock', url: 'https://discord.gg/nAA64gvKyB' },
            { name: 'Warrior', url: 'https://discord.gg/RbCZJtw' },
        ],
    },
]
