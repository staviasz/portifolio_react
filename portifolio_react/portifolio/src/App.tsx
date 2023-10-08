import { MouseEvent, useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";

import AboutMe from "./containers/AboutMe";
import Sidebar from "./containers/Sidebar";
import EstiloGlobal, { Container, List } from "./style";
// import lightTheme from './containers/themes/light'
// import Projects from "./containers/Projects";
import Projects from "./components/Projects";
import darkTheme from "./containers/themes/dark";
import lightTheme from "./containers/themes/light";
import { DataProps, RepoProps, initialData, mapData } from "./mapData/mapData";
import { getUserInfo, getUserRepositores } from "./service/gitHubApi";

function App() {
  const [darkThemeActive, setDarkThemeActive] = useState(false);
  const [data, setData] = useState<DataProps>(initialData);
  const [repos, setRepos] = useState<RepoProps[]>([]);
  const [index, setIndex] = useState(0);

  const perPage = 6;

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
        setData(() => cleanData[0]);
        setRepos(() => cleanData[0].repositores.slice(0, perPage));
      };
      getData();
    } catch (e) {
      //
    }
  }, []);

  const loadRepos = (
    e: MouseEvent<HTMLButtonElement> | MouseEvent<HTMLSpanElement>,
    list: "next" | "prev" | "" = ""
  ) => {
    let newIndex: number;

    if (list === "next") {
      newIndex = index + perPage;
      setIndex(newIndex);
      setRepos(data.repositores.slice(newIndex, newIndex + perPage));
    } else if (list === "prev") {
      newIndex = index - perPage;
      setIndex(newIndex);
      setRepos(data.repositores.slice(newIndex, newIndex + perPage));
    } else {
      const value = Number((e.target as HTMLSpanElement).textContent);
      newIndex = (value - 1) * perPage;
      setIndex(newIndex);
      setRepos(data.repositores.slice(newIndex, newIndex + perPage));
    }
  };

  const pagesListRepos = [];
  for (let i = 1; i <= data.repositores.length / perPage; i++) {
    pagesListRepos.push(i);
  }

  return (
    <ThemeProvider theme={darkThemeActive ? darkTheme : lightTheme}>
      <EstiloGlobal />
      <Container>
        <Sidebar cangeTheme={changeTheme} {...data} />
        <main>
          <AboutMe {...data} />
          <List>
            {data.repositores &&
              repos.map((repo) => {
                return <Projects key={repo.name_repo} {...repo} />;
              })}
          </List>
          <div className="pagination">
            <button onClick={(e) => loadRepos(e, "prev")} disabled={index <= 0}>
              &lt;
            </button>
            {pagesListRepos.map((i) => (
              <span key={i} onClick={(e) => loadRepos(e)}>
                {i}
              </span>
            ))}
            <button
              onClick={(e) => loadRepos(e, "next")}
              disabled={data.repositores.length - 1 <= index + perPage}
            >
              &gt;
            </button>
          </div>
        </main>
      </Container>
    </ThemeProvider>
  );
}

export default App;
