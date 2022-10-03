import { Column, Row } from '@carbonplan/components'
import { alpha } from '@theme-ui/color'
import { Box } from 'theme-ui'

const Metadata = ({ color, metadata, printable }) => {
  const rows = [
    { label: 'License', key: 'license' },
    { label: 'Funding', key: 'funding' },
    {
      label: 'Variables',
      key: 'variables',
      formatter: (vars) => vars.join(', '),
    },
    { label: 'Spatial coverage', key: 'spatial_coverage' },
    { label: 'Spatial resolution', key: 'spatial_resolution' },
    { label: 'Temporal coverage', key: 'temporal_coverage' },
    { label: 'Temporal resolution', key: 'temporal_resolution' },
  ]
  return (
    <Box
      sx={{
        backgroundColor: printable ? null : alpha(color, 0.2),
        fontSize: 0,
        fontFamily: 'mono',
        letterSpacing: 'mono',
        textTransform: 'uppercase',
      }}
    >
      {rows
        .filter((row) => metadata[row.key])
        .map(({ key, label, formatter }) => (
          <Row key={key} columns={[6, 8, 3, 3]} sx={{ py: 2 }}>
            <Column
              start={1}
              width={[2, 2, 1, 1]}
              sx={{ color, ml: printable ? 0 : 2 }}
            >
              {label}:
            </Column>
            <Column start={[3, 3, 2, 2]} width={[4, 6, 2, 2]}>
              {formatter ? formatter(metadata[key]) : metadata[key]}
            </Column>
          </Row>
        ))}
    </Box>
  )
}

export default Metadata
