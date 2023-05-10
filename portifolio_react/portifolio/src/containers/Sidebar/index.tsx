import Avatar from '../../components/Avatar'
import Paragraph from '../../components/Paragraph'
import Title from '../../components/title'
import { Description, ButtonTheme, SidebarContainer } from './style'

type Props = {
  cangeTheme: () => void
}

const Sidebar = (Props: Props) => (
  <aside>
    <SidebarContainer>
      <Avatar />
      <Title fontSize={20}>Erick</Title>
      <Paragraph type="secundario" fontSize={16}>
        Staviasz
      </Paragraph>
      <Description fontSize={12} type="principal">
        Engenheiro FrontEnd
      </Description>
      <ButtonTheme onClick={Props.cangeTheme}>Trocar tema</ButtonTheme>
    </SidebarContainer>
  </aside>
)

export default Sidebar
