import Paragraph from '../Paragraph'
import Title from '../title'

import { Card, LinkButton } from './style'

const Project = () => (
  <Card>
    <Title>Projeto lista de tarefas</Title>
    <Paragraph type="secundario">lista de tarefas com vue.js</Paragraph>
    <LinkButton>Visualizar</LinkButton>
  </Card>
)

export default Project
