import EstiloGlobal, { Container } from './style'
import Sidebar from './containers/Sidebar'
import AboutMe from './containers/AboutMe'
import Projects from './containers/Projects'

function App() {
  return (
    <>
      <EstiloGlobal />
      <Container>
        <Sidebar />
        <main>
          <AboutMe />
          <Projects />
        </main>
      </Container>
    </>
  )
}

export default App
