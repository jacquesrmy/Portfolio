import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="DressUp">
    <Container>
      <Title>
      DressUp <Badge>2022-?</Badge>
      </Title>
      <P>
      DressUp is an android and IOS application that offers you outfits every day according to your tastes.
      This application will be provided with :
      </P>
  
      <P>- The creation and management of accounts in a firebase database.</P>
      <P>- The addition and the possibility to modify the clothes of its own wardrobe.</P>
      <P>- The proposal of an outfit for each day according to the weather and the user&apos;s preferences.</P>
      <P>- A social part allowing you to post and share your outfits.</P>
      <P>- An AI determining the user&apos;s preferences when using the application.</P>
      <P>- A selling part with complete outfits in partnership with small and eco-responsible brands.</P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Android/IOS</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>React Native</span>
        </ListItem>
        <ListItem>
          <Meta>Github source</Meta>
          <Link href="https://github.com/TheFoxell/DressUp">
          github.com/TheFoxell/DressUp <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
