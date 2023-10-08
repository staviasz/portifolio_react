import styled, { createGlobalStyle } from "styled-components";

const EstiloGlobal = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Inter', sans-serif;
  }

  body {
    padding: 80px 0;
    background-color: ${(props) => props.theme.corDeFundo};

    @media (max-width: 768px) {
      padding: 40px 0;
    }
  }

  .pagination {
    margin-top: 32px;
    color: ${(props) => props.theme.corPrincipal};
    display: flex;
    align-items: center;
    justify-content: center;

    span {
      padding: 8px;

      &:hover {
        cursor: pointer;
        color: #4476bf;
      }
    }
    
    button {
      color: ${(props) => props.theme.corPrincipal};
      border: none;
      background-color: transparent;
      padding: 16px;
      cursor: pointer;
      font-weight: bold;
      
      &:disabled {
        display: none;
      }
    }
  }
`;

export default EstiloGlobal;

export const Container = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 128px auto;
  gap: 56px;

  @media (max-width: 768px) {
    max-width: 90%;
    display: block;
  }

  ul {
    list-style: none;
  }

  img {
    max-width: 100%;
  }
`;

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 36px;
  row-gap: 40px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    column-gap: 0;
    row-gap: 16px;
  }
`;
