import { Title as TitleStyle } from "./style";

export type Props = {
  children: string;
  fontSize?: number;
};

const Title = (props: Props) => (
  <TitleStyle fontSize={props.fontSize}>{props.children}</TitleStyle>
);

export default Title;
