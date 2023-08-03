import { StyleAvatar } from "./style";

interface Props {
  avatar_url: string;
}

const Avatar = ({ avatar_url = "" }: Props) => <StyleAvatar src={avatar_url} />;

export default Avatar;
