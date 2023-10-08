import styled from "styled-components";

export const Container = styled.form`
  background-color: rgba(0, 0, 0, 0.5);
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  > div {
    display: flex;
    flex-direction: column;
    background-color: #fff;
    padding: 50px;
    border-radius: 16px;

    label {
      margin-bottom: 16px;
      display: flex;
      align-items: center;

      i {
        font-size: 24px;
        margin-right: 8px;
      }
    }

    input {
      padding: 8px;
      border-radius: 16px;
      outline: none;
      border: 1px solid ${(props) => props.theme.corDeFundoBotao};
      margin-bottom: 16px;
    }

    > button {
      width: 100px;
      padding: 5px;
      border-radius: 8px;
      background-color: ${(props) => props.theme.corDeFundoBotao};
      color: ${(props) => props.theme.corDeFundo};
      font-weight: bold;
    }
  }
`;
