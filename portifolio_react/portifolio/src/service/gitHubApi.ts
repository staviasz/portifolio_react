import axios from "axios";

export const getUserInfo = async (username: string) => {
  try {
    const response = await axios.get(
      `https://api.github.com/users/${username}`
    );
    return response.data;
  } catch (error) {
    throw new Error("Erro ao obter informações do usuário do GitHub");
  }
};

export const getUserRepositores = async (username: string) => {
  try {
    const response = await axios.get(
      `https://api.github.com/users/${username}/repos`
    );
    return response.data;
  } catch (error) {
    throw new Error("Erro ao obter informações do usuário do GitHub");
  }
};
