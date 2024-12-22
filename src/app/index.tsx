import ExpansionPanel from '../components/ExpansionPanel'
import Header from '../components/Header'
import versions from '../data/versions'
import Welcome from '../components/Welcome'
import Footer from '../components/Footer'

function App() {
  return (
    <>
      <Header />
      <Welcome />
      <div className="expansion-panels">
        {versions.slice().reverse().filter(version => version.available).map(version => (
          <ExpansionPanel version={version} />
        ))}
      </div>
      <Footer />
    </>
  )
}

export default App
