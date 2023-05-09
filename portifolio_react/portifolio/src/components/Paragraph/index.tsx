import { P } from './style'

export type Props = {
  children: string
  type?: 'principal' | 'secundaria'
}

const Paragraph = ({ children, type = 'principal' }: Props) => (
  <P type={type}>{children}</P>
)

export default Paragraph
