import { Badge, Column, LinkGroup, Row } from '@carbonplan/components'
import { useBreakpointIndex } from '@theme-ui/match-media'
import { Box, Flex } from 'theme-ui'

const Dataset = ({ dataset }) => {
  const { name, description, color, links, tags } = dataset
  return (
    <Box>
      <Box
        sx={{
          backgroundColor: color,
          width: '100%',
          height: ['100px', '150px'],
          position: 'relative',
        }}
      >
        <Box
          sx={{ position: 'absolute', maxWidth: '65%', right: 2, bottom: 2 }}
        >
          <Flex
            sx={{
              columnGap: 2,
              rowGap: 1,
              flexWrap: 'wrap',
              justifyContent: 'flex-end',
            }}
          >
            {tags.map((tag) => (
              <Badge
                key={tag}
                sx={{ textTransform: 'capitalize', opacity: 0.7 }}
              >
                {tag}
              </Badge>
            ))}
          </Flex>
        </Box>
      </Box>
      <Box sx={{ fontSize: [3, 3, 4, 4], fontFamily: 'heading', my: 2 }}>
        {name}
      </Box>
      <Box
        sx={{
          color: color,
          fontFamily: 'mono',
          letterSpacing: 'mono',
          textTransform: 'uppercase',
          mb: 2,
        }}
      >
        Formats:
      </Box>
      <Box sx={{ fontSize: [3, 3, 1, 1], mb: 3 }}>{description}</Box>
      <LinkGroup members={links} inverted />
    </Box>
  )
}

const Datasets = ({ datasets }) => {
  const index = useBreakpointIndex({ defaultIndex: 2 })

  return (
    <Row columns={[6, 8, 7, 7]}>
      <Column start={[1, 1, 1, 1]} width={[6, 8, 3, 3]}>
        {datasets
          .filter((d, i) => index < 2 || i % 2 === 0)
          .map((d) => (
            <Dataset key={d.name} dataset={d} />
          ))}
      </Column>

      {index >= 2 && (
        <Column start={[1, 1, 5, 5]} width={[6, 8, 3, 3]}>
          {datasets
            .filter((d, i) => i % 2 === 1)
            .map((d) => (
              <Dataset key={d.name} dataset={d} />
            ))}
        </Column>
      )}
    </Row>
  )
}

export default Datasets
