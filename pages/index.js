import { useCallback, useState } from 'react'
import { Box } from 'theme-ui'
import { Layout, Column, Heading, Row, Input } from '@carbonplan/components'

import Datasets from '../components/datasets'
import datasets from '../datasets.json'

const Main = () => {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState(datasets)

  const handleQueryChange = useCallback((e) => {
    setQuery(e.target.value)
    const regexp = new RegExp(e.target.value.trim(), 'i')
    setResults(
      datasets.filter(
        (d) => d.name.match(regexp) || d.description.match(regexp)
      )
    )
  }, [])

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
            <Input
              placeholder='Search'
              value={query}
              onChange={handleQueryChange}
              sx={{ width: '100%' }}
            />
          </Column>
          <Column start={[1, 1, 5, 5]} width={[6, 8, 7, 7]}>
            <Datasets datasets={results} />
          </Column>
        </Row>
      </Box>
    </Layout>
  )
}

export default Main
