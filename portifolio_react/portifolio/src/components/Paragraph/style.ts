import styled from "styled-components";

import { Props } from ".";

export const P = styled.p<Props>`
  color: ${(props) =>
    props.type === "principal"
      ? props.theme.corPrincipal
      : props.theme.corSecundaria};
  font-size: ${(props) => (props.fontSize ? props.fontSize + "px" : "14px")};
  line-height: 22px;
`;
