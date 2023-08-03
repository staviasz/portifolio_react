import Avatar from "../../components/Avatar";
import Paragraph from "../../components/Paragraph";
import Title from "../../components/title";
import { ButtonTheme, Description, SidebarContainer } from "./style";

type Props = {
  cangeTheme: () => void;
  avatar_url: string;
  name: string;
  usuario: string;
};

const Sidebar = ({ avatar_url, name, usuario, cangeTheme }: Props) => (
  <aside>
    <SidebarContainer>
      <Avatar avatar_url={avatar_url} />
      <Title fontSize={20}>{name}</Title>
      <Paragraph type="secundario" fontSize={16}>
        {usuario}
      </Paragraph>
      <Description fontSize={12} type="principal">
        Engenheiro FrontEnd
      </Description>
      <ButtonTheme onClick={cangeTheme}>Trocar tema</ButtonTheme>
    </SidebarContainer>
  </aside>
);

export default Sidebar;

// name === title, login === usuario ,
