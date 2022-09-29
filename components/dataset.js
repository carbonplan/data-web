import { Badge, Button, Expander, LinkGroup } from '@carbonplan/components'
import { Down } from '@carbonplan/icons'
import { useState } from 'react'
import AnimateHeight from 'react-animate-height'
import { Box, Flex } from 'theme-ui'

import Metadata from './metadata'

const Dataset = ({ dataset, printable = false }) => {
  const { name, description, color, links, tags, metadata, formats } = dataset
  const [expanded, setExpanded] = useState(printable)
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
        <Flex
          sx={{
            position: 'absolute',
            maxWidth: '65%',
            right: 2,
            bottom: 2,
            columnGap: 2,
            rowGap: 1,
            flexWrap: 'wrap',
            justifyContent: 'flex-end',
          }}
        >
          {tags.map((tag) => (
            <Badge key={tag} sx={{ textTransform: 'capitalize', opacity: 0.7 }}>
              {tag}
            </Badge>
          ))}
        </Flex>
        {!printable && (
          <Expander
            sx={{
              position: 'absolute',
              bottom: 2,
              left: 2,
              stroke: 'primary',
              '@media (hover: hover) and (pointer: fine)': {
                '&:hover': {
                  fill: 'secondary',
                  stroke: 'secondary',
                },
              },
            }}
            value={expanded}
            onClick={() => setExpanded(!expanded)}
          />
        )}
      </Box>
      <AnimateHeight
        duration={100}
        height={expanded ? 'auto' : 0}
        easing={'linear'}
      >
        <Metadata color={color} metadata={metadata} />
      </AnimateHeight>
      <Box sx={{ fontSize: [3, 3, 4, 4], fontFamily: 'heading', my: 2 }}>
        {name}
      </Box>
      <Flex
        sx={{
          color: color,
          gap: 3,
          fontFamily: 'mono',
          letterSpacing: 'mono',
          textTransform: 'uppercase',
          mb: 2,
        }}
      >
        Formats:
        {formats.map(({ label, href }) => (
          <Button
            key={label}
            href={href}
            sx={{
              color,
              fontFamily: 'mono',
              letterSpacing: 'mono',
              textTransform: 'uppercase',
            }}
            suffix={<Down />}
            size='xs'
          >
            {label}
          </Button>
        ))}
      </Flex>
      <Box sx={{ fontSize: [3, 3, 1, 1], mb: 3 }}>{description}</Box>
      <LinkGroup members={links} inverted />
    </Box>
  )
}

export default Dataset
