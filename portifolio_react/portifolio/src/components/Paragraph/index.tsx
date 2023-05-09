import { P } from './style'

export type Props = {
  children: string
  type?: 'principal' | 'secundario'
}

const Paragraph = ({ children, type = 'principal' }: Props) => (
  <P type={type}>{children}</P>
)

export default Paragraph
