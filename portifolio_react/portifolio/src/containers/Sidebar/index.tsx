import Avatar from "../../components/Avatar";
import Paragraph from "../../components/Paragraph";
import Title from "../../components/title";
import { ButtonTheme, SidebarContainer } from "./style";

type Props = {
  changeTheme: () => void;
  avatar_url: string;
  name: string;
  usuario: string;
};

const Sidebar = ({ avatar_url, name, usuario, changeTheme }: Props) => (
  <aside>
    <SidebarContainer>
      <Avatar avatar_url={avatar_url} />
      <Title fontSize={20}>{name}</Title>
      <Paragraph type="secundario" fontSize={16}>
        {usuario}
      </Paragraph>
      <ButtonTheme onClick={changeTheme}>Trocar tema</ButtonTheme>
    </SidebarContainer>
  </aside>
);

export default Sidebar;

// name === title, login === usuario ,
