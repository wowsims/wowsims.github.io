// Define the schema for site version data
export type Version = {
    title: string,
    acronym: string,
    description: string,
    // Cover image source URI. May be an absolute URL, a path relative to DOMAIN (e.g. `/mop/...`),
    // or an asset imported from `src/assets`.
    coverSrc?: string,
    // Logo image source URI. Same formats as `coverSrc`.
    logoSrc?: string,
    themeColorHex: string,
    // Whether or not the site version is currently launched
    available: boolean,
    // 'wip' versions are shown on the homepage but are not linked. Defaults to 'live'.
    status?: 'live' | 'wip',
}
