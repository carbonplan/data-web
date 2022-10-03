import {
  Badge,
  Button,
  Expander,
  LinkGroup,
  formatDate,
} from '@carbonplan/components'
import { Down } from '@carbonplan/icons'
import { useState } from 'react'
import AnimateHeight from 'react-animate-height'
import { Box, Flex } from 'theme-ui'

import Metadata from './metadata'

const Tags = ({ tags, sx }) => {
  return (
    <Flex
      sx={{
        columnGap: 2,
        rowGap: 1,
        flexWrap: 'wrap',
        ...sx,
      }}
    >
      {tags.map((tag) => (
        <Badge key={tag} sx={{ textTransform: 'capitalize', opacity: 0.7 }}>
          {tag}
        </Badge>
      ))}
    </Flex>
  )
}

const Dataset = ({ dataset, printable = false }) => {
  const { name, description, image, color, links, tags, metadata, formats } =
    dataset
  const [expanded, setExpanded] = useState(false)

  return (
    <Box sx={{ width: '100%', mb: [5, 7, 6, 6] }}>
      <Flex
        sx={{
          justifyContent: 'space-between',
          alignItems: 'center',
          mb: 2,
        }}
      >
        <Box
          sx={{
            color: 'secondary',
            fontSize: 1,
            fontFamily: 'mono',
            letterSpacing: 'mono',
            textTransform: 'uppercase',
          }}
        >
          {printable ? 'released ' : null} {formatDate(metadata.release_date)}
        </Box>

        {printable && (
          <Tags
            tags={tags}
            sx={{
              maxWidth: '65%',
              right: 2,
              bottom: 2,
              justifyContent: 'flex-end',
            }}
          />
        )}
      </Flex>

      <Box
        sx={{
          backgroundColor: color,
          backgroundImage: `url(${image})`,
          backgroundSize: 'cover',
          width: '100%',
          height: printable ? 0 : ['100px', '150px', '150px', '150px'],
          position: 'relative',
        }}
      >
        {!printable && (
          <Tags
            tags={tags}
            sx={{
              position: 'absolute',
              maxWidth: '65%',
              right: 2,
              bottom: 2,
              justifyContent: 'flex-end',
            }}
          />
        )}

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
      <Box
        sx={{
          fontSize: printable ? 6 : [3, 3, 4, 4],
          fontFamily: 'heading',
          mb: 2,
          mt: printable ? 5 : 2,
        }}
      >
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
              flexShrink: 0,
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

      {printable && (
        <>
          <Box
            sx={{
              color: 'secondary',
              textTransform: 'uppercase',
              letterSpacing: 'smallcaps',
              fontFamily: 'heading',
              mt: 5,
              mb: 2,
            }}
          >
            Metadata
          </Box>
          <Metadata color={color} metadata={metadata} printable />
        </>
      )}
    </Box>
  )
}

export default Dataset
