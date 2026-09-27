import VersionCard from '../components/VersionCard'
import Header from '../components/Header'
import { getVersions } from '../data/versions'
import Welcome from '../components/Welcome'
import Footer from '../components/Footer'

function App() {
  return (
    <>
      <Header />
      <main className="homepage-main page-container">
        <Welcome />
        <div className="version-grid">
          {getVersions().map(version => (
            <VersionCard version={version} key={version.acronym} />
          ))}
        </div>
      </main>
      <Footer />
    </>
  )
}

export default App
