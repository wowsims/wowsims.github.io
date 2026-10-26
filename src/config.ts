export const DOMAIN = 'https://www.wowsims.com';
export const GITHUB_LINK = 'https://github.com/wowsims/';
export const DISCORD_LINK = 'https://discord.gg/p3DgvmnDCS';
export const ADDON_LINK = 'https://www.curseforge.com/wow/addons/wowsimsexporter';
export const PATREON_LINK = 'https://www.patreon.com/wowsims';

// Shown in the footer of every WoWSims site: the sim sites read these from `/versions.json` (see `VersionsManifest`)
export const COPYRIGHT_START_YEAR = 2021;
export const COPYRIGHT_HOLDER = 'WoWSims team';
export const DISCLAIMER = 'A fan-made project, not affiliated with Blizzard Entertainment.';

// The end year is filled in when the page renders, so it never waits on a redeploy
export const formatCopyright = (startYear: number, holder: string, currentYear = new Date().getFullYear()): string =>
    `© ${startYear}-${currentYear} ${holder}`;
