import { defineConfig, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import { buildVersionsManifest } from './src/data/versions'

const VERSIONS_MANIFEST_FILE = 'versions.json'

// Publishes the site version list as `/versions.json`, so every sim site can link to the others
// from one shared list. `VersionsManifest` in `src/data/versions.ts` describes the contract.
function versionsManifest(): Plugin {
  const source = () => JSON.stringify(buildVersionsManifest(), null, 2)

  return {
    name: 'wowsims-versions-manifest',
    configureServer(server) {
      server.middlewares.use(`/${VERSIONS_MANIFEST_FILE}`, (_req, res) => {
        res.setHeader('Content-Type', 'application/json')
        res.setHeader('Access-Control-Allow-Origin', '*')
        res.end(source())
      })
    },
    generateBundle() {
      this.emitFile({ type: 'asset', fileName: VERSIONS_MANIFEST_FILE, source: source() })
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), versionsManifest()],
})
