import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon, ViewIcon } from '@chakra-ui/icons'
import { Title, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Afit">
    <Container>
      <Title>
      Afit <Badge>2020</Badge>
      </Title>
      <P>
      The AFIT (Standing for Arithmetic for IT) project has for aim to build first standard ciphering algorithms ; 
      main aim being RSA and ElGamal cryptosystems.
      </P>
      <P>
      This was the first project I did in my school.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://maths.prepa.cri.epita.fr/index.html">
          https://maths.prepa.cri.epita.fr/index.html <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Linux</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>OCaml</span>
        </ListItem>
        <ListItem>
          <Meta>Maths Documentation (EN)</Meta>
          <Link href="/Project_Report/AFIT_file_en.pdf" class="link"> AFIT_file_en.pdf <ViewIcon mx="2px" /></Link>
        </ListItem>
      </List>
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
