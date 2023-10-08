/* eslint-disable @typescript-eslint/no-explicit-any */
export const initialData: DataProps = {
  usuario: "",
  avatar_url: "",
  link_perfil: "",
  repositores: [],
  name: "",
  public_repos: "",
  bio: "",
};

export interface DataProps {
  usuario: string;
  avatar_url: string;
  link_perfil: string;
  repositores: RepoProps[];
  name: string;
  public_repos: string;
  bio: string;
}

export const mapData = (info: any[], repos: any[]): DataProps[] => {
  return info.map((item) => {
    const {
      login: usuario = "",
      avatar_url = "",
      html_url: link_perfil = "",
      repositores = mapRepositores(repos),
      name = "",
      public_repos = "",
      bio = "",
    } = item;
    return {
      usuario,
      avatar_url,
      link_perfil,
      repositores,
      name,
      public_repos,
      bio,
    };
  });
};

export interface RepoProps {
  name_repo: string;
  language: string;
  src_repo: string;
}

export const mapRepositores = (repos: any[]): RepoProps[] => {
  return repos.map((repo) => {
    const {
      name: name_repo = "",
      language = "",
      html_url: src_repo = "",
    } = repo;
    return {
      name_repo,
      language,
      src_repo,
    };
  });
};
