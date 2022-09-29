import { Column, Row } from '@carbonplan/components'
import { useBreakpointIndex } from '@theme-ui/match-media'

import Dataset from './dataset'

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
