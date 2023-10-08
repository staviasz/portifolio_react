import { ChangeEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./styles";

const Username = () => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState("");

  const changeValue = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const changeSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inputValue.trim() === "") {
      alert("O campo usuario é obrigatorio");
      return;
    }
    navigate(`username/${inputValue}`);
  };

  return (
    <S.Container onSubmit={changeSubmit}>
      <div>
        <label htmlFor="username_id">
          <i className="devicon-github-original"></i>Username
        </label>
        <input
          placeholder="Digite seu usúario do github"
          type="text"
          id="username_id"
          onChange={changeValue}
        />
        <button type="submit">Enviar</button>
      </div>
    </S.Container>
  );
};

export default Username;
