import { Box } from 'theme-ui'
import { Layout, Column, Heading, Row } from '@carbonplan/components'
import datasets from '../datasets.json'
import Dataset from '../components/dataset'

const Main = () => {
  return (
    <Layout
      title={'Datasets – CarbonPlan'}
      description={'A catalog of datasets produced throughout our work.'}
      card={'https://images.carbonplan.org/social/research.png'}
      links={'local'}
      metadata={`COUNT: ${datasets.length}`}
      nav={'data'}
    >
      <Box>
        <Heading
          description={'A catalog of datasets produced throughout our work.'}
          descriptionStart={[1, 4, 6, 6]}
          descriptionWidth={[6, 5, 5, 5]}
        >
          Datasets
        </Heading>

        <Row>
          <Column start={[1, 1, 2, 2]} width={[6, 8, 2, 2]}>
            Navigation
          </Column>
          <Column start={[1, 1, 5, 5]} width={[6, 8, 7, 7]}>
            {datasets.map((d) => (
              <Dataset key={d.name} />
            ))}
          </Column>
        </Row>
      </Box>
    </Layout>
  )
}

export default Main
