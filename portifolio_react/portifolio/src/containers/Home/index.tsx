/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { MouseEvent, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Projects from "../../components/Projects";
import {
  DataProps,
  RepoProps,
  initialData,
  mapData,
} from "../../mapData/mapData";
import { getUserInfo, getUserRepositores } from "../../service/gitHubApi";
import { Container, List } from "../../style";
import AboutMe from "../AboutMe";
import Sidebar from "../Sidebar";

type Props = {
  changeTheme: () => void;
};

const Home = ({ changeTheme }: Props) => {
  const params = useParams();
  const { username } = params;
  const [data, setData] = useState<DataProps>(initialData);
  const [repos, setRepos] = useState<RepoProps[]>([]);
  const [index, setIndex] = useState(0);

  const perPage = 6;
  useEffect(() => {
    try {
      const getData = async () => {
        const dataInfoPromise = getUserInfo(username!);
        const dataReposPromise = getUserRepositores(username!);
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
  }, [username]);

  const loadRepos = (
    e: MouseEvent<HTMLSpanElement | HTMLButtonElement>,
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
    <Container>
      <Sidebar changeTheme={changeTheme} {...data} />
      <main>
        <AboutMe {...data} username={username!} />
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
  );
};

export default Home;
