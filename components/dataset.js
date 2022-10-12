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
import { tint } from '@theme-ui/color'

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
        <Badge
          key={tag}
          sx={{
            fontSize: [1],
            height: ['21px'],
            textTransform: 'uppercase',
            fontFamily: 'mono',
            letterSpacing: 'mono',
            opacity: 0.7,
          }}
        >
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
    <Box sx={{ width: '100%', mb: [5, 7, 7, 8] }}>
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
          width: '100%',
          height: printable ? 0 : ['125px', '150px', '150px', '150px'],
          position: 'relative',
        }}
      >
        <Box
          sx={{
            backgroundImage: `url(${image})`,
            backgroundSize: 'cover',
            height: '100%',
            width: '100%',
            position: 'absolute',
            filter: 'grayscale(100%)',
          }}
        />
        <Box
          sx={{
            bg: color,
            height: '100%',
            width: '100%',
            position: 'absolute',
            opacity: 0.7,
            mixBlendMode: 'dodge',
          }}
        />
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
                  fill: tint(color, 0.25),
                  stroke: tint(color, 0.25),
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
          fontSize: printable ? 6 : [4, 4, 4, 4],
          fontFamily: 'heading',
          mb: 2,
          pt: ['2px'],
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
            suffix={
              <Down
                sx={{
                  width: ['13px', '13px', '13px', '14px'],
                  height: ['13px', '13px', '13px', '14px'],
                  mt: ['-3px', '-3px', '-3px', '-4px'],
                }}
              />
            }
            size='xs'
          >
            {label}
          </Button>
        ))}
      </Flex>
      <Box sx={{ fontSize: [2, 2, 2, 2], mb: 2, py: [1] }}>{description}</Box>
      <LinkGroup members={links} inverted />

      {printable && (
        <>
          <Metadata color={color} metadata={metadata} printable />
        </>
      )}
    </Box>
  )
}

export default Dataset
