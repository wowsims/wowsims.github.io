// Define the schema for site version data
export type Version = {
    title: string,
    acronym: string,
    description: string,
    // Cover image source URI
    coverSrc: string,
    // Logo image source URI
    logoSrc: string,
    themeColorHex: string,
    // Whether or not the site version is currently launched
    available: boolean,
}
