import { P } from "./style";

export type Props = {
  children: string;
  type?: "principal" | "secundario";
  fontSize?: number;
};

const Paragraph = ({ children, type = "principal", fontSize }: Props) => (
  <P fontSize={fontSize} type={type}>
    {children}
  </P>
);

export default Paragraph;
