import { MDXProvider, useMDXComponents } from '@mdx-js/react'
import { useThemedStylesWithMdx } from '@theme-ui/mdx'
import { Column, Button, Layout, Row } from '@carbonplan/components'
import { Left } from '@carbonplan/icons'

import ZarrAccess from '../../components/zarr-access.md'

const Page = () => {
  const componentsWithStyles = useThemedStylesWithMdx(useMDXComponents())

  return (
    <MDXProvider components={componentsWithStyles}>
      <Layout
        title={'Datasets – CarbonPlan'}
        description={'A catalog of datasets produced throughout our work.'}
        links={'local'}
        nav={'data'}
      >
        <Row>
          <Column
            start={[1, 1]}
            width={[2]}
            dr={1}
            sx={{ mb: [-2, -4, 0, 0], mt: [3, 4, '109px', '154px'] }}
          >
            <Button
              onClick={() => {
                if (window.history.state?.idx) {
                  window.history.back()
                } else {
                  window.location.href = '/data'
                }
              }}
              inverted
              size='xs'
              prefix={<Left />}
              sx={{ ml: ['-2px', '-2px', '-2px', '-2px'] }}
            >
              Back
            </Button>
          </Column>

          <Column start={[1, 1, 3, 3]} width={6} sx={{ mt: '2px' }}>
            <ZarrAccess />
          </Column>
        </Row>
      </Layout>
    </MDXProvider>
  )
}

export default Page
