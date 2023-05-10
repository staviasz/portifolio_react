import styled, { createGlobalStyle } from 'styled-components'

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
`

export default EstiloGlobal

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
`
