import { Box, Flex, ThemeProvider } from 'theme-ui'
import theme from '@carbonplan/theme'
import { formatDate } from '@carbonplan/components'

import Dataset from '../components/dataset'
import datasets from '../datasets.json'

const PrintablePage = ({ children, sx }) => {
  return (
    <Flex sx={{ width: '100vw', height: '100vh', p: 54, ...sx }}>
      {children}
    </Flex>
  )
}

const printTheme = {
  ...theme,
  config: { ...theme.config, printColorModeName: 'dark' },
}
const Print = () => {
  return (
    <ThemeProvider theme={printTheme}>
      <PrintablePage sx={{ alignItems: 'center' }}>
        <Box>
          <Box sx={{ fontFamily: 'heading', fontSize: 8, mb: 4 }}>
            CarbonPlan - Datasets
          </Box>
          <Box
            sx={{
              color: 'secondary',
              fontFamily: 'mono',
              letterSpacing: 'mono',
              textTransform: 'uppercase',
              mb: 9,
            }}
          >
            Updated {formatDate(new Date().toLocaleDateString())}
          </Box>
        </Box>
      </PrintablePage>
      {datasets.map((dataset) => (
        <PrintablePage key={dataset.name}>
          <Dataset dataset={dataset} printable />
        </PrintablePage>
      ))}
    </ThemeProvider>
  )
}

export default Print
