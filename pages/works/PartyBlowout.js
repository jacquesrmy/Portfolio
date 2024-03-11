import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon, ViewIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="PartyBlowout">
    <Container>
      <Title>
      PartyBlowout <Badge>2021</Badge>
      </Title>
      <P>
      PartyBlowout is a multiplayer video game in which the player can either host or join a game. 
      The game will be composed of a series of mini-games:</P>
      <P>- A car game, the Fruit Race.</P>
      <P>- An FPS with snowball.</P>
      <P>- A hide-and-seek between players and artificial intelligences, the Guess Who.</P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://bighappydove.github.io/">
          bighappydove.github.io <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Windows/macOS</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>C#</span>
        </ListItem>
        <ListItem>
          <Meta>Github source</Meta>
          <Link href="https://github.com/BigHappyDove/Party-Blowout">
          github.com/BigHappyDove/Party-Blowout <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Project report (FR)</Meta>
          <Link href="/Project_Report/PartyBlowout_project_report.pdf" class="link"> PartyBlowout_project_report.pdf <ViewIcon mx="2px" /></Link>
        </ListItem>
      </List>

      <WorkImage src="/images/works/PartyBlowout_01.png" alt="PartyBlowout" />
      <WorkImage src="/images/works/PartyBlowout_02.png" alt="PartyBlowout" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
