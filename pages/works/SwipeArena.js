import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="SwipeArena">
    <Container>
      <Title>
      SwipeArena <Badge>2023-?</Badge>
      </Title>
      <P>
      SwipeArena is a multiplayer video game in which the player swipe on its screen 
      to move his character and tries to defeat the opponent.
      </P> 
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Android/IOS</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>C#</span>
        </ListItem>
        <ListItem>
          <Meta>Github source</Meta>
          <Link href="https://github.com/Evonya/Swipe-Arena">
          github.com/Evonya/Swipe-Arena <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
