import { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";

import AboutMe from "./containers/AboutMe";
import Sidebar from "./containers/Sidebar";
import EstiloGlobal, { Container, List } from "./style";
// import lightTheme from './containers/themes/light'
// import Projects from "./containers/Projects";
import Projects from "./components/Projects";
import darkTheme from "./containers/themes/dark";
import lightTheme from "./containers/themes/light";
import { DataProps, initialData, mapData } from "./mapData/mapData";
import { getUserInfo, getUserRepositores } from "./service/gitHubApi";

function App() {
  const [darkThemeActive, setDarkThemeActive] = useState(false);
  const [data, setData] = useState<DataProps>(initialData);

  function changeTheme() {
    setDarkThemeActive(!darkThemeActive);
  }

  useEffect(() => {
    try {
      const getData = async () => {
        const dataInfoPromise = getUserInfo("staviasz");
        const dataReposPromise = getUserRepositores("staviasz");
        const [dataInfo, dataRepos] = await Promise.all([
          dataInfoPromise,
          dataReposPromise,
        ]);

        const cleanData = mapData([dataInfo], dataRepos);
        console.log("info", cleanData);
        setData(() => cleanData[0]);
      };
      getData();
    } catch (e) {
      //
    }
  }, []);

  return (
    <ThemeProvider theme={darkThemeActive ? darkTheme : lightTheme}>
      <EstiloGlobal />
      <Container>
        <Sidebar cangeTheme={changeTheme} {...data} />
        <main>
          <AboutMe {...data} />
          <List>
            {data.repositores &&
              data.repositores.map((repo) => {
                return <Projects key={repo.name_repo} {...repo} />;
              })}
          </List>
        </main>
      </Container>
    </ThemeProvider>
  );
}

export default App;
