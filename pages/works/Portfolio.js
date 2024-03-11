import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Portfolio">
    <Container>
      <Title>
      Portfolio <Badge>2022</Badge>
      </Title>
      <P>
      This is just a simple portfolio, the place where you are.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://jacques-remy-portfolio.vercel.app">
          jacques-remy-portfolio.vercel.app <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Windows/macOS/Linux/IOS/Android</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>JavaScript</span>
        </ListItem>
        <ListItem>
          <Meta>Github source</Meta>
          <Link href="https://github.com/Evonya/Portfolio">
          github.com/Evonya/Portfolio <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>

      <WorkImage src="/images/works/Portfolio_01.png" alt="Portfolio" />

    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
