import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ViewIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="42sh">
    <Container>
      <Title>
      42sh <Badge>2024</Badge>
      </Title>
      <P>
      The project is about developing &quot;42sh&quot;, a UNIX shell program compliant with the POSIX standard.
       This entails creating a command-line interface that can interpret and execute commands given by the user. 
       Key features include handling simple commands, command lists, if statements, variable assignment and expansion, 
       file redirections, pipelines, and logical operators. The shell supports built-in commands like &apos;echo&apos;, &apos;true&apos;, and &apos;false&apos;, 
       and is capable of executing scripts from files, strings using the &apos;-c&apos; option, or standard input. 
       The project emphasizes correct error handling, memory management, 
       and the use of POSIX-defined behavior to ensure compatibility across UNIX-like systems. 
       Advanced features, such as handling quotes, executing while/until loops, and expanding special variables, 
       are also implemented. The shell&apos;s development process involves creating a lexer and parser to interpret shell syntax, 
       managing process execution, and ensuring proper interaction with the operating system&apos;s file and process management capabilities.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Windows/macOS/Linux</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>C</span>
        </ListItem>
        <ListItem>
          <Meta>Github source</Meta>
          <span>The GitHub repository is private, but feel free to ask me if you need more information.</span>
        </ListItem>
        <ListItem>
          <Meta>Documentation (EN)</Meta>
          <Link href="/Project_Report/42sh-subject.pdf" class="link"> 42sh-subject.pdf <ViewIcon mx="2px" /></Link>
        </ListItem>
      </List>
      <WorkImage src="/images/works/42sh_01.PNG" alt="42sh" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
