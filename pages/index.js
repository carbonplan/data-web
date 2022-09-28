import { useEffect, useState } from 'react'
import { Box, Flex } from 'theme-ui'
import {
  Layout,
  Column,
  Heading,
  Row,
  Input,
  Filter,
} from '@carbonplan/components'

import Datasets from '../components/datasets'
import datasets from '../datasets.json'

const INITIAL_TAGS = datasets.reduce((accum, d) => {
  d.tags.forEach((tag) => (accum[tag] = true))
  return accum
}, {})

const INITIAL_YEARS = datasets.reduce((accum, d) => {
  accum[d.metadata.release_date.split('-')[2]] = true
  return accum
}, {})

const Main = () => {
  const [query, setQuery] = useState('')
  const [tags, setTags] = useState(INITIAL_TAGS)
  const [years, setYears] = useState(INITIAL_YEARS)
  const [results, setResults] = useState(datasets)

  useEffect(() => {
    const regexp = new RegExp(query.trim(), 'i')

    setResults(
      datasets.filter(
        (d) =>
          years[d.metadata.release_date.split('-')[2]] &&
          d.tags.some((tag) => tags[tag]) &&
          (d.name.match(regexp) || d.description.match(regexp))
      )
    )
  }, [query, tags, years])

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
            <Flex sx={{ flexDirection: 'column', gap: 6 }}>
              <Input
                placeholder='Search'
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                sx={{ width: '100%' }}
              />

              <Filter
                label='Filter by tag'
                values={tags}
                setValues={setTags}
                showAll
                multiSelect
              />
              <Filter
                label='Filter by release year'
                values={years}
                setValues={setYears}
                showAll
                multiSelect
              />
            </Flex>
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
