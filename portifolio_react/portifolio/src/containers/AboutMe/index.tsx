import Paragraph from '../../components/Paragraph'
import Title from '../../components/title'
import { GithubSection } from './style'

const AboutMe = () => (
  <section>
    <Title>Sobre mim</Title>
    <Paragraph>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt, totam
      vero? Repellat aliquam laborum obcaecati adipisci. Ea voluptas in eius, ad
      animi minima adipisci, ut, eveniet hic explicabo illum cum.
    </Paragraph>
    <GithubSection>
      <img src="https://github-readme-stats.vercel.app/api?username=staviasz&show_icons=true&theme=dracula&include_all_commits=true&count_private=true" />
      <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=staviasz&layout=compact&langs_count=7&theme=dracula" />
    </GithubSection>
  </section>
)

export default AboutMe
