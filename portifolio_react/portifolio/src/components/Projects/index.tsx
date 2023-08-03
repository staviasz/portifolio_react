import Paragraph from "../Paragraph";
import Title from "../title";

import { Card, LinkButton } from "./style";

interface ProjectProps {
  name_repo: string;
  language: string;
  src_repo: string;
}

const Project = ({ name_repo, language, src_repo }: ProjectProps) => {
  if (!language) {
    language = "Fork";
  }
  return (
    <Card>
      <Title>{name_repo}</Title>
      <Paragraph type="secundario">{language}</Paragraph>
      <LinkButton href={src_repo}>Visualizar</LinkButton>
    </Card>
  );
};

export default Project;
