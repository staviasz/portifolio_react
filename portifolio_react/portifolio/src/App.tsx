import { useState } from 'react'
import { ThemeProvider } from 'styled-components'

import EstiloGlobal, { Container } from './style'
import Sidebar from './containers/Sidebar'
import AboutMe from './containers/AboutMe'
import Projects from './containers/Projects'
// import lightTheme from './containers/themes/light'
import darkTheme from './containers/themes/dark'
import lightTheme from './containers/themes/light'

function App() {
  const [darkThemeActive, setDarkThemeActive] = useState(false)

  function changeTheme() {
    setDarkThemeActive(!darkThemeActive)
  }

  return (
    <ThemeProvider theme={darkThemeActive ? darkTheme : lightTheme}>
      <EstiloGlobal />
      <Container>
        <Sidebar cangeTheme={changeTheme} />
        <main>
          <AboutMe />
          <Projects />
        </main>
      </Container>
    </ThemeProvider>
  )
}

export default App
