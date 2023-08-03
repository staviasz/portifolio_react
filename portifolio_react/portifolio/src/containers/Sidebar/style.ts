import styled from "styled-components";
import { P } from "../../components/Paragraph/style";

export const Description = styled(P)`
  margin-top: 24px;
  margin-bottom: 40px;
`;
export const ButtonTheme = styled.button`
  border-radius: 12px;
  padding: 8px;
  color: ${(props) => props.theme.corDeFundo};
  font-size: 10px;
  font-weight: bold;
  background-color: ${(props) => props.theme.corPrincipal};
  border: none;
  cursor: pointer;
`;

export const SidebarContainer = styled.div`
  position: sticky;
  top: 80px;
  left: 0;

  @media (max-width: 768px) {
    text-align: center;
    margin-bottom: 40px;
  }
`;
