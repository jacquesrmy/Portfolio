import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon, ViewIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="OCRSudoku">
    <Container>
      <Title>
      OCRSudoku <Badge>2021-</Badge>
      </Title>
      <P>
      The OCRSudoku is an Optical Character Recognition (OCR) software that solves a sudoku grid. 
      The application takes an image as input representing a sudoku grid and displays the solved grid as output.
      </P>
      <P>
      In this project, I was in charge of the Machine Learning part.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://thefoxell.github.io/SudokuSite/">
          thefoxell.github.io/SudokuSite <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
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
          <Link href="https://github.com/TheFoxell/OCRSudokuS3">
          github.com/TheFoxell/OCRSudokuS3 <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Project report (FR)</Meta>
          <Link href="/Project_Report/OCRSudoku_project_report.pdf" class="link"> OCRSudoku_project_report.pdf <ViewIcon mx="2px" /></Link>
        </ListItem>
      </List>

      <WorkImage src="/images/works/OCRSudoku_01.png" alt="OCRSudoku" />
      <WorkImage src="/images/works/OCRSudoku_02.png" alt="OCRSudoku" />
      <WorkImage src="/images/works/OCRSudoku_03.png" alt="OCRSudoku" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
