import ExpansionPanel from '../components/ExpansionPanel'
import Header from '../components/Header'
import { getVersions } from '../data/versions'
import Welcome from '../components/Welcome'
import Footer from '../components/Footer'
import { ExpansionScrollspy } from '../components/ExpansionScrollspy'

function App() {
  return (
    <>
      <ExpansionScrollspy />
      <Header />
      <Welcome />
      <div className="expansion-panels">
        {getVersions().map(version => (
          <ExpansionPanel version={version} key={version.acronym} />
        ))}
      </div>
      <Footer />
    </>
  )
}

export default App
